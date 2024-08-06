import styles from '@/app/Components/(liteComponents)/AnimatedHeading/AnimatedHeading.module.css'
import { FaAngleRight } from "react-icons/fa6";
const AnimatedHeading = (props) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>
                {props.title}
                <FaAngleRight className={styles.icon} />
                <div className={styles.exploreAll}>
                    <span>Explore all</span>
                    <FaAngleRight className={styles.icon} />
                </div>
            </h3>
            <div className={styles.border} style={{ display: `${props.borderDisplay}` }}></div>
        </div>
    )
}
export default AnimatedHeading