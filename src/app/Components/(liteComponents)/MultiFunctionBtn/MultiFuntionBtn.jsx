import styles from '@/app/Components/(liteComponents)/MultiFunctionBtn/MultiFunctionBtn.module.css'
const MultiFuntionBtn = ({ title, onClick, gradient, disabled }) => {
    return (
        <button disabled={disabled} className={gradient ? styles.gradient : styles.bordered} onClick={onClick}>{title || 'Add example +'}</button>
    )
}

export default MultiFuntionBtn