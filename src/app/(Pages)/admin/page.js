'use client'
import styles from '@/app/(Pages)/admin/admin.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import ReviewCard from '@/app/Components/reviewCard/ReviewCard'
import Loading from '@/app/Components/(liteComponents)/Loading/Loading'
const page = () => {
    const router = useRouter();
    const [isAdmin, setisAdmin] = useState(false)
    const [prompt, setprompt] = useState('')
    const [promptData, setpromptData] = useState([])

    function selectCategory(e) {
        const category = e.target.value;
        if (category == 'dalle') {
            setprompt(category)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (document.cookie) {
                const getCookieValue = (name) => {
                    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                    return match ? decodeURIComponent(match[2]) : null;
                };

                const token = getCookieValue('token');
                const decodeCookie = jwtDecode(token);
                const userRole = decodeCookie.userRole;

                if (userRole == 'admin') {
                    setisAdmin(true);
                } else {
                    setisAdmin(false);
                    router.push('/');
                }
            } else {
                setisAdmin(false);
                router.push('/login');
            }
        }

        const fetchData = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/getprompt?status=pending&&promptType=Dall-E`, {
                withCredentials: true
            })
            setpromptData(response.data)
        }
        fetchData()

    }, [router]);

    if (!isAdmin) return null

    if (!promptData) return <Loading />

    return (
        <div className={styles.parentContainer}>
            <select onChange={selectCategory} className='select' defaultValue="select category" name="categories" id="categories">
                <option key="select category" value="select category" disabled>Select Category</option>
                <option value="dalle" key="dalle">Dalle Prompts</option>
                <option value="midjourney" key="midjourney">Midjourney Prompts</option>
            </select>

            {/* prompts type */}
            <div className={styles.promptsContainer}>
                {
                    promptData.map((e, index) =>
                        <ReviewCard key={index} label={e.promptType} image={e.Image_Url[0]} description={`${e.description.slice(0, 48)}...`} onClick={() => router.push(`/admin/review/dalle/${e._id}`)} />
                    )
                }
            </div>
        </div>
    )
}

export default page