import styles from "@/app/Components/BorderButton/BorderButton.module.css"
const BorderButton = ({ onClick, title }) => {
    return (
        <button onClick={onClick} className={styles.borderBtn}>{title}</button>
    )
}
export default BorderButton;