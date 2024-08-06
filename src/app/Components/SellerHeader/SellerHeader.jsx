'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/app/Components/SellerHeader/SellerHeader.module.css"
import Image from "next/image";

// bottom nav imports
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import axios from "axios";

const SellerHeader = () => {
    const router = useRouter();
    const [seller, setseller] = useState({ text: "Login", link: "/login" })
    const [logout, setlogout] = useState(false)
    const [role, setrole] = useState('admin')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (document.cookie.includes('token=')) {

                const getCookieValue = (name) => {
                    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                    return match ? decodeURIComponent(match[2]) : null;
                };

                const token = getCookieValue('token');

                const decodedToken = jwtDecode(token)
                setrole(decodedToken.userRole)
                const userId = decodedToken.userId
                const profileHandle = decodedToken.profileHandle
                // if (role === "seller") {
                //     setseller({ text: "Profile", link: `/user/${profileHandle}/seller-dashboard` })
                //     setlogout(true)
                // } else if (role === "user") {
                //     setseller({ text: "becomeSeller", link: '/sellerinfo' })
                //     setlogout(true)
                // }
                if (role === 'seller') {
                    setseller({ text: 'Profile', link: `/user/${profileHandle}/seller-dashboard` })
                    setlogout(true)
                    // router.push('/')
                }
                else {
                    setseller({ text: "Login", link: '/login' })
                    setlogout(false)
                    router.push('/')
                }
            }
        }
        // console.log(userData)
    }, [role])

    // logout Function
    const logoutFunc = async () => {
        try {
            await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/logout`, {
                withCredentials: true
            })
            setseller({ text: 'Login', link: '/login' })
            setlogout(false)
            setrole('user')
            router.push('/')
        } catch (error) {
            console.log(`Failed to logout ${error}`)
        }
    }

    return (
        <>
            <header className={styles.headerContainer}>
                {/* ------------- top header------------- */}
                <div className={styles.topHeader}>
                    {/* logo  */}
                    <Link className={styles.desktopLogo} href='/'><img src="/assets/imageAssets/dollarprompt-desktop-logo.svg" style={{ width: "150px" }} alt="site-logo" /></Link>
                    <Link className={styles.mobileLogo} href='/'><img style={{ width: '36px' }} src="/assets/imageAssets/dollarprompt-mobile-logo.svg" alt="site-logo" /></Link>

                    {/* top nav icons */}
                    <nav className={styles.mainNav}>
                        <ul>
                            <li><Link className={styles.link} href='/Marketplace'>Marketplace</Link></li>
                            <li><Link className={styles.link} href={seller.link}>{seller.text}</Link></li>
                            <li className={styles.link} style={{ display: `${logout == true ? 'block' : 'none'}` }} onClick={logoutFunc}>Logout</li>
                            {/* <Link href='/'><Image src={userImage} className={styles.profileImage} width={0} height={0} sizes="100vw" alt="site-logo" /></Link> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default SellerHeader;