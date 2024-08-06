'use client'
import styles from '@/app/(Pages)/user/[username]/seller-dashboard/seller.module.css'
import Image from 'next/image'
import Tab from '@/app/Components/Tab/Tab';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { userData } from '@/app/utilities/userData';

const page = ({ params }) => {
    const data = userData()
    const { username } = params;
    const [sellerData, setsellerData] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/seller/getseller?profileHandle=${username}`)
            .then((response) => {
                setsellerData(response.data[0])
            })
    }, [])

    if (!sellerData) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.bannerOuterContainer}>
                <div className={styles.banner}>
                    {sellerData.profileBanner && (  // ensures that logging only happens when sellerData and sellerData.profileBanner
                        <Image
                            className={styles.bannerImage}
                            src={sellerData.profileBanner[0]}
                            width={0}
                            height={0}
                            sizes='100vw'
                            alt='Banner'
                        />
                    )}
                </div>
                <div className={styles.userLogo}>
                    {
                        sellerData.profileImage && (
                            <Image className={styles.logoImage} alt="profile Image" src={sellerData.profileImage[0]} width={0} height={0} sizes='100vw' />
                        )
                    }
                </div>
            </div>

            {/* profile content wrapper */}
            <div className={styles.profileWrapper}>

                {/* user name links */}
                <div className={styles.userNameLinks}>
                    <div className={styles.userName}>@{sellerData.profileHandle}
                    </div>
                </div>

                {/* profile bio */}
                <div className={styles.profileBio}>
                    {sellerData.profileDescription}
                </div>

                {/* ................categories............ */}
                <Tab sellerId={data.userId} sellerHandle={username} />
            </div>
        </div>
    )
}

export default page