import styles from '@/app/Components/(liteComponents)/InputField/InputField.module.css'

const InputField = (props) => {
    return (
        <input className={styles.inputField} type="text" name={props.name} id={props.id} placeholder={props.placeholder} onChange={props.onchangeFunc} value={props.value} />
    )
}

export default InputField