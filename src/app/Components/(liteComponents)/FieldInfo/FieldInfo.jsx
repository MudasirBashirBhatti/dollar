import styles from "@/app/Components/(liteComponents)/FieldInfo/FieldInfo.module.css"
import Link from "next/link"
const FieldInfo = (props) => {
    return (
        <div className={styles.fieldContainer} style={{ margin: props.margin, color: props.color }}>
            <div className={styles.fieldTitle}>{props.title}</div>
            <i className={styles.fieldDescription}>{props.description} <Link href={`${props.linkUrl}`}>{props.linkText}</Link></i>
        </div>
    )
}

export default FieldInfo