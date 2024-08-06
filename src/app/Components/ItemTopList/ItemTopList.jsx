import styles from '@/app/Components/ItemTopList/ItemTopList.module.css'
import AnimatedHeading from '../(liteComponents)/AnimatedHeading/AnimatedHeading'
const ItemTopList = (props) => {
    return (
        <div className={styles.container}>
            <AnimatedHeading title="Trending Prompts" borderDisplay="none" />
            {props.mainComponent}
        </div>
    )
}

export default ItemTopList