import styles from '@/app/Components/(liteComponents)/PromptCustomCheck/PromptCustomCheck.module.css'
import { useState } from 'react'
const PromptCustomCheck = ({ title, name, onChange }) => {
    const [isChecked, setisChecked] = useState(true)
    function handleOnChange(e) {
        setisChecked(prev => prev == false ? true : false)
        onChange(e)
    }
    return (
        <div className={styles.checkBoxContainer}>
            <div className={styles.title}>{title}</div>
            <input
                className={styles.checkInput}
                onChange={handleOnChange}
                value={isChecked}
                type="checkbox"
                name={name}
                id="" />
        </div>
    )
}

export default PromptCustomCheck