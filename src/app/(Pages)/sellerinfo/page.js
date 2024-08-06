'use client'
import axios from 'axios';
import { useState } from 'react';
import styles from '@/app/(Pages)/sellerinfo/sellerinfo.module.css';
import TextArea from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea';
import InputField from '@/app/Components/(liteComponents)/InputField/InputField';
import FieldInfo from '@/app/Components/(liteComponents)/FieldInfo/FieldInfo';
import ImageUploader from '@/app/Components/(liteComponents)/ImageUploader/ImageUploader';
import GradientButton from '@/app/Components/GradientButton/GradientButton';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const [user, setUser] = useState({});

    function getValue(val) {
        const { name, value, type } = val.target;
        if (type === "file") {
            const files = val.target.files;
            setUser((prevUser) => ({ ...prevUser, [name]: files }));
        } else {
            setUser((prevUser) => ({ ...prevUser, [name]: value }));
        }
        console.log("Updated user state: ", user);
    }

    // refresh cookie function on becoming seller
    const refreshCookie = async (userId, userRole) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/refreshcookie`, {
                userId,
                userRole
            }, {
                withCredentials: true
            })
            document.cookie = `token = ${response.data.newToken}; path=/`
            setlogout(true)
            setseller({ text: 'Profile', link: `/seller/${userId}` })
            console.log(`Cookie refreshed successfully`, response.data)
        } catch (error) {
            console.log(`Failed to refresh cookie`)
        }
    }

    // becomeSeller function to handle cookie refresh value
    const becomeSeller = async () => {
        const token = document.cookie;
        console.log(token)
        const decodedToken = jwtDecode(token)
        const userId = decodedToken.userId;
        await refreshCookie(userId, 'seller')

        // push to profile page
        router.push(`/seller/${userId}`)
    }

    async function onSubmitFunc() {
        becomeSeller()
        const formData = new FormData();
        for (const key in user) {
            if (key === 'profileBanner' || key === 'profileImage') {
                Array.from(user[key]).forEach(file => formData.append(key, file));
            } else {
                formData.append(key, user[key]);
            }
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/seller/postdata`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            console.log("Server response: ", response.data);
        } catch (error) {
            console.log("myError is here:", error);
        }

    }

    return (
        <div className={styles.container}>
            <div>
                <FieldInfo title="Upload Profile Image" />
                <ImageUploader onChangeFunc={getValue} labelFor="profileImage" containerWidth="100px" containerHeight="100px" iconWidth="50px" iconHeight="50px" />
            </div>
            <div>
                <FieldInfo title="Upload Banner Image" />
                <ImageUploader onChangeFunc={getValue} labelFor="profileBanner" containerWidth="100%" containerHeight="150px" iconWidth="70px" iconHeight="70px" />
            </div>
            <div>
                <FieldInfo title="Profile Handle" />
                <InputField name="profileHandle" onchangeFunc={getValue} placeholder="@profilehandle" />
            </div>
            <div>
                <FieldInfo title="Profile Description" />
                <TextArea name="profileDescription" onChange={getValue} placeholder="Short Profile description..." rows={10} margin="0px" />
            </div>
            <div className={styles.submitBtn}>
                <GradientButton title="Submit" onClick={onSubmitFunc} />
            </div>
        </div>
    );
}

export default Page;
