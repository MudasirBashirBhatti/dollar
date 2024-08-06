import styles from '@/app/Components/(liteComponents)/SingleFilter/SingleFilter.module.css'
const SingleFilter = ({ label, name, onClick }) => {
    return (
        <>
            <div className={styles.singleFilterContainer}>
                <div className={styles.line}></div>
                <input className={styles.inputBox} type='radio' name={name} id={label} onClick={onClick} />
                <label htmlFor={label}>{label}</label>
            </div>
        </>
    )
}

export default SingleFilter