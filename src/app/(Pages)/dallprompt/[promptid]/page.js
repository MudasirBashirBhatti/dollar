'use client'
import React, { useEffect } from 'react'
import styles from "@/app/(Pages)/dallprompt/[promptid]/page.module.css"
import Image from 'next/image';
import { IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import Favourites from '@/app/Components/Favourites/Favourites';
import IconText from '@/app/Components/(liteComponents)/IconText/IconText';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HiMiniPaintBrush } from "react-icons/hi2";
import GradientButton from '@/app/Components/GradientButton/GradientButton';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios';
import Loading from '@/app/Components/(liteComponents)/Loading/Loading';
import { addToCart } from '@/app/Redux/Features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const page = ({ params }) => {
    const { promptid } = params;

    const [prompt, setPrompt] = useState(null)
    const [heart, setheart] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/dalle/get/${promptid}`)
            .then((response) => {
                setPrompt(response.data)
            })
    }, [promptid])

    if (!prompt) {
        return <Loading />
    }

    // function to store data on local storage
    const localStorageFunc = () => {
        dispatch(addToCart(prompt))
    }

    // save prompt to local storage


    // formate createdAt date 
    function formateCreateAt(createdAt) {
        const date = new Date(createdAt);
        return date.toLocaleDateString();
    }

    function heartFunc() {
        console.log('heart clicked')
        setheart(prev => !prev)
        console.log(window.Notification)
    }

    return (
        <div className={styles.mainContainer}>
            {/* leftContainer */}
            <div className={styles.leftContainer}>
                <div className={styles.favouriteIcon} onClick={heartFunc}>
                    {/* <CiHeart className={styles.favouriteIcon} style={{ transform: `scale(${heart ? 0 : 1})` }} />
                    <FaHeart className={styles.favouriteIcon} style={{ transform: `scale(${heart ? 0 : 1})` }} /> */}
                    {
                        heart ? <CiHeart className={styles.favouriteIcon} /> : <FaHeart className={styles.favouriteIcon} style={{ fontSize: '30px' }} />
                    }
                </div>
                {/* background Hero Image */}
                <div className={styles.imageGradient}>
                    <img src={prompt.Image_Url[0]} />
                    <div className={styles.gradient}></div>
                    <div className={styles.logo}>
                        <IconText text="⛵" icon={prompt.promptType} />
                    </div>
                </div>

                <h1 className={styles.heading}>{prompt.title}
                </h1>
                {/* image section */}
                <div className={styles.smallImageSection}>
                    <Image className={styles.image} src={prompt.Image_Url[0]} width={90} height={40} />

                    {/* favourites Container */}
                    <Favourites icon={<IoMdHeart />} text="Favourites" />

                    {/* views container */}
                    <Favourites icon={<MdRemoveRedEye />} text="Favourites" />
                </div>
                {/* other info  */}
                <div className={styles.verifiedInfo}>
                    <IconText text="58" icon="words" />
                    <IconText text="Tested" icon={<RiVerifiedBadgeFill />} />
                    <IconText text="Tips" icon={<RiVerifiedBadgeFill />} />
                    <IconText text="HQ images" icon={<RiVerifiedBadgeFill />} />
                    <IconText text={<HiMiniPaintBrush />} icon={<RiVerifiedBadgeFill />} />
                </div>

                {/* designerInfo */}
                <div className={styles.designerInfoContainer}>
                    <Image src="/assets/imageAssets/logo.png" width={25} height={25} />
                    <div className={styles.designerSocialHandle}>@{prompt.userId}</div>
                </div>

                {/* prompt info */}
                <div className={styles.promptDescription}>
                    {prompt.description}
                </div>

                {/* price */}
                <div className={styles.price}><span>$</span>{prompt.price}</div>

                {/* Get your prompt */}
                <div className={styles.getPromptContainer}>
                    <GradientButton title="Get prompt" />
                    <div className={styles.cartContainer}>
                        <MdOutlineAddShoppingCart className={styles.cart} onClick={localStorageFunc} />
                    </div>
                </div>

                {/* purchasing benefits */}
                <div className={styles.purchasingBenefits}>
                    After purchasing, you will gain access to the prompt file which you can use with DALL·E or the app builder. You'll receive 20 free generation credits with this purchase. By purchasing this prompt, you agree to our terms of service.
                </div>

                {/* creation date */}
                <div className={styles.timeStamp}>{formateCreateAt(prompt.createdAt)}</div>

            </div>

            {/* right container */}
            <div className={styles.rightContainer}>
                {
                    prompt.Image_Url.map((imageUrl, index) =>
                        <Image key={index} src={imageUrl} width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', borderRadius: '10px' }} alt={index + 1} />
                    )
                }
            </div>
        </div >
    )
}

export default page