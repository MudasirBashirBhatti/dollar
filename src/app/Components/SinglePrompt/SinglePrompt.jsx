import Image from 'next/image'
import styles from "@/app/Components/SinglePrompt/SinglePrompt.module.css"

const SinglePrompt = () => {
    return (
        <div className={styles.SinglePromptContainer}>
            <div className={styles.counting}>1</div>
            <Image className={styles.image} alt='myImage' src="/assets/imageAssets/featureCard.webp" width={120} height={60} />
            <div className={styles.content}>
                <div className={styles.title}>Captured Moments</div>
                <div className={styles.promptName}>Midjourney</div>
                <div className={styles.price}>$4.99</div>
            </div>
        </div>
    )
}

export default SinglePrompt