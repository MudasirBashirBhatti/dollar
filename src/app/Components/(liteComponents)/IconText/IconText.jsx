import styles from '@/app/Components/(liteComponents)/IconText/IconText.module.css'
const IconText = (props) => {
    return (
        <div className={styles.container}>
            <div>{props.text}</div>
            {props.icon}
        </div>
    )
}

export default IconText