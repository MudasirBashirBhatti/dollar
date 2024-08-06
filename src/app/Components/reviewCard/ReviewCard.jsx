import Image from 'next/image';
import styles from '@/app/Components/reviewCard/ReviewCard.module.css'
import GradientButton from '../GradientButton/GradientButton';
const ReviewCard = ({ label, description, image, onClick }) => {
    return (
        <div className={styles.featuredCardContainer}>
            <Image className={styles.image} alt='demo_image' src={image} width={350} height={200} />
            <div className={styles.label}>{label}</div>
            <div className={styles.optionsContainer}>
                <div className={styles.infoText}>{description}</div>
                <div className={styles.reviewBtn}>
                    <GradientButton title="Review" onClick={onClick} />
                </div>
            </div>
        </div>
    )
}
export default ReviewCard;