"use clients"
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/Components/SinglePromptCard/SinglePromptCard.module.css'

const SinglePromptCard = ({ image, label, title, price, link }) => {
    return (
        <Link href={link || '/'} className={styles.promptCardContainer}>
            <Image className={styles.image} alt="image" src={image || "/assets/imageAssets/featureCard.webp"} width={0} height={0} sizes='100vw' />
            <div className={styles.bottomText}>
                <div className={styles.label}>{label || 'no-label'}</div>
                <h3 className={styles.title}>{title || "Character Design"}</h3>
                <div className={styles.infoText}>{price || "$4.55"}</div>
            </div>
        </Link>
    )
}
export default SinglePromptCard;