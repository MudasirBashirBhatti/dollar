'use client'
import axios from "axios";
import { useState } from "react";
import styles from '@/app/(Pages)/signup/signup.module.css'
import Image from "next/image";
import InputField from "@/app/Components/(liteComponents)/InputField/InputField";
import Link from "next/link";
import { useRouter } from "next/navigation";
const CreateUser = () => {
    const router = useRouter();
    const users = {
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        password: "",
    }
    const [user, setuser] = useState(users);

    // function to get input handle
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value })
    }

    // function to handle submit
    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/signup`, user)
        setuser(users)
        router.push('/login')
    }

    return (
        <div className={styles.container}>
            <Image src="/assets/imageAssets/logo.png" width={0} height={0} className={styles.logo} sizes="100vw" />
            {/* heading */}
            <h1 className={styles.heading}>Create An Account</h1>
            <form onSubmit={submitForm} action="" className={styles.formContainer}>

                <InputField name="firstName" id="firstName" onchangeFunc={inputHandler} placeholder="First Name *" value={user.firstName} />

                <InputField name="lastName" id="lastName" onchangeFunc={inputHandler} placeholder="Last Name *" value={user.lastName} />

                <InputField name="email" id="email" onchangeFunc={inputHandler} placeholder="Email *" value={user.email} />

                <InputField name="password" id="password" onchangeFunc={inputHandler} placeholder="Password *" value={user.password} />

                <div className={styles.genderInputContainer}>
                    <div className={styles.genderInput}>
                        <label htmlFor="male">Male</label><br />
                        <input type="radio" id="male" name="gender" value="male" onChange={inputHandler} />

                        <label htmlFor="female">Female</label><br />
                        <input type="radio" id="female" name="gender" value="female" onChange={inputHandler} />
                    </div>
                </div>

                <input className={styles.submitBtn} type="submit" value="Register" />

                {/* borderbottom  */}
                <div className={styles.borderBottom}></div>

                {/* google button */}
            </form>

            <button className={styles.googleBtn}>
                <Image src="/assets/icons/googleIcon.png" width={30} height={30} />
                Google
            </button>

            {/* terms & condition */}
            <div className={styles.terms}>By creating an account, you agree to our <Link href="/tandcs">terms of service.</Link></div>

            {/* already have account */}
            <Link className={styles.link} href="">I already have an account</Link>
        </div>
    )
}
export default CreateUser;