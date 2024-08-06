import styles from "@/app/Components/GradientButton/GradientButton.module.css"
const GradientButton = ({ width, title, onClick }) => {
    return (
        <button style={{ width: width || 'fitContent' }} className={styles.gradientBtn} onClick={onClick}>{title}</button>
    )
}
export default GradientButton;