'use client'
import styles from '@/app/(Pages)/Profile/page.module.css'
import Image from 'next/image'

import { LuGlobe } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import { useEffect, useState } from 'react';
import Search from '@/app/Components/(liteComponents)/Search/Search';
import axios from 'axios';
import Loading from '@/app/Components/(liteComponents)/Loading/Loading';
import SinglePromptCard from '@/app/Components/SinglePromptCard/SinglePromptCard';
import AnimatedHeading from '@/app/Components/(liteComponents)/AnimatedHeading/AnimatedHeading';


const page = async ({ params }) => {
    const [prompt, setprompt] = useState(null)
    const [sellerDetail, setsellerDetail] = useState(null)
    const { userid } = params;

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/dalle/filter?userId=${userid}&&status=active`)
            .then((response) => {
                setprompt(response.data)
            })

        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/seller/getseller?userId=${userid}`)
            .then((response) => {
                setsellerDetail(response.data[0])
            })
    }, [userid])

    if (!prompt || !sellerDetail) return <Loading />
    return (
        <div className={styles.mainContainer}>
            <div className={styles.bannerOuterContainer}>
                <div className={styles.banner}>
                    <Image className={styles.bannerImage} src={sellerDetail.profileBanner[0]} width={0} height={0} sizes='100vw' />
                </div>
                <div className={styles.userLogo}>
                    <Image className={styles.logoImage} src={sellerDetail.profileImage[0]} width={0} height={0} sizes='100vw' />
                </div>
                {/* follow button */}
                <button className={styles.followBtn}>
                    Follow <FaUserPlus />
                </button>
            </div>

            {/* profile content wrapper */}
            <div className={styles.profileWrapper}>

                {/* user name links */}
                <div className={styles.userNameLinks}>
                    <div className={styles.userName}>@{sellerDetail.profileHandle}
                    </div>
                    <div className={styles.socialIcons}>

                        <a href="/">
                            <LuGlobe />
                        </a>

                        <a href="/">
                            <LuInstagram />
                        </a>

                        <a href="/">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>

                {/* profile bio */}
                <div className={styles.profileBio}>
                    {sellerDetail.profileDescription}
                </div>

                {/*---------------- user stats--------- */}
                <div className={styles.userStats}>

                    {/* stats */}
                    <div className={styles.stats}>
                        <IoMdEye /> 100
                    </div>
                    {/* success badge */}
                    <div className={styles.successBadge}>
                        Top Seller <BsFillGearFill />
                    </div>

                    {/*---- profile sub details----- */}
                    {/* profile rank */}
                    <div className={styles.profileSubDetail}>
                        PromptBase Rank: <b className={styles.detail}>#8</b>
                    </div>

                    {/* joining date */}
                    <div className={styles.profileSubDetail}>
                        Joined: <b className={styles.detail}>September 2024</b>
                    </div>
                </div>

                {/* models wrapper */}
                <div className={styles.modelsWrapper}>
                    <div className={styles.singleModel}>🎨 Dall-E</div>
                </div>

                {/* ----------profileWrapper--------- */}
                <div className={styles.profileReviews}>
                    {/* ratings */}
                    <div className={styles.ratingContainer}>
                        <div className={styles.starRating}>4.9</div>
                        <div className={styles.starsContainer}>
                            <MdStar />
                            <MdStar />
                            <MdStar />
                            <MdStar />
                            <MdStar />
                        </div>
                        <div className={styles.reviewCount}>(<span>147</span>)</div>
                    </div>

                    {/* followers  */}
                    <div className={styles.numFollows}>
                        0<span> Followers</span>
                    </div>

                    {/* followings  */}
                    <div className={styles.numFollows}>
                        266<span> Followings</span>
                    </div>
                </div>

                {/* search bar */}
                <Search placeholder="Search @charismaenigma's prompts" />

                {/* prompts */}
                <AnimatedHeading title="Other prompts by this seller" />
                <div className={styles.promptsWrapper}>
                    {prompt.map((item) => (
                        <SinglePromptCard image={item.Image_Url[0]} label={item.promptType} title={`${item.title.slice(0, 18)} . . .`} price={item.price} link={`/dallprompt/${item._id}`} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default page