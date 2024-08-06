import styles from '@/app/Components/(liteComponents)/TierPerk/TierPerk.module.css'
import { RxCross2 } from "react-icons/rx";
const TierPerk = () => {
    return (
        <div className={styles.container}>
            <RxCross2 className={styles.icon} />
            1,250 credits/month
        </div>
    )
}

export default TierPerk