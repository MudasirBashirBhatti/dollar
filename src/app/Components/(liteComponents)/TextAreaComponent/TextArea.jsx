import styles from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea.module.css'
const TextArea = ({ name, id, rows, onChange, placeholder, margin, value }) => {
    return (
        <textarea className={styles.textInput} placeholder={placeholder} name={name} id={id} cols="30" rows={rows} onChange={onChange} style={{ marginBottom: margin }} value={value} />
    )
}

export default TextArea;