'use client'
import { useState } from "react";
import styles from '@/app/(Pages)/login/login.module.css'
import Image from "next/image";
import InputField from "@/app/Components/(liteComponents)/InputField/InputField";
import Link from "next/link";
import { post } from "@/app/Services/ApiEndpoint.js";
const loginUser = () => {
    const users = {
        email: "",
        password: "",
    }
    const [user, setuser] = useState(users);

    // function to get input handle
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value })
        console.log(user)
    }

    // function to handle submit
    const submitForms = async (e) => {
        e.preventDefault();
        try {
            const request = await post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/login`, user)
            const response = request.data
            document.cookie = `token = ${response.token}; path=/`
            window.location.href = '/'
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className={styles.container}>
            <Image src="/assets/imageAssets/logo.png" width={0} height={0} className={styles.logo} sizes="100vw" />
            {/* heading */}
            <h1 className={styles.heading}>Account Login</h1>
            <form onSubmit={submitForms} action="" className={styles.formContainer}>

                <InputField name="email" id="email" onchangeFunc={inputHandler} placeholder="Email *" value={user.email} />

                <InputField name="password" id="password" onchangeFunc={inputHandler} placeholder="Password *" value={user.password} />

                <input className={styles.submitBtn} type="submit" value="Login" />

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
            <Link className={styles.link} href="/signup">Create a new account</Link>
        </div>
    )
}
export default loginUser;