import React from 'react'
import styles from "@/app/Components/HomeTopSlider/HomTopSlider.module.css"
import GradientButton from '../GradientButton/GradientButton'
import BorderButton from '../BorderButton/BorderButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const HomeTopSlider = () => {
    const router = useRouter()
    return (
        <div className={styles.sliderContainer}>
            {/* <img src="/assets/imageAssets/Home/HomeTopSlider.webp" alt="demoHeader" /> */}
            <Image src="/assets/imageAssets/Home/HomeTopSlider.webp" alt='topSlider' width={0} height={0} sizes='100vw' className={styles.sliderImage} />
            <div className={styles.content}>
                <h1 className={styles.heading}>Prompt Marketplace</h1>
                <h2 className={styles.subHeading}>Search 100,000 AI prompts from the world's best AI creators</h2>
                <div className={styles.highligtedText}>Midjourney, ChatGPT, DALL.E, Stable Diffusion & more</div>
                <div className={styles.buttonContainer}>
                    <Link href='/Marketplace'><GradientButton title="Explore prompts" /></Link>
                    <Link href='/sell'><BorderButton title="Sell prompts" /></Link>
                </div>

            </div>
        </div>
    )
}

export default HomeTopSlider