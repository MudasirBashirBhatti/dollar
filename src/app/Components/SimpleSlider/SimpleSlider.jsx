import React from 'react'
import styles from "@/app/Components/SimpleSlider/SimpleSlider.module.css"
import GradientButton from '../GradientButton/GradientButton'
const SimpleSlider = () => {
    return (
        <div className={styles.sliderContainer}>
            <img src="/assets/imageAssets/simpleSlider.webp" alt="demo slider" />
            <div className={styles.content}>
                <h2 className={styles.heading}>Sell Your Prompts on Prompt Marketplace</h2>
                <div className={styles.subHeading}>Upload your prompt, connect with Stripe, and become a seller in just 2 minutes
                </div>
                <div className={styles.buttonContainer}>
                    <GradientButton title="Sell a prompt" />
                </div>

            </div>
        </div>
    )
}

export default SimpleSlider;