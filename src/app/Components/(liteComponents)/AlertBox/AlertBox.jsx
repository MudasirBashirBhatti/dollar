import styles from '@/app/Components/(liteComponents)/AlertBox/AlertBox.module.css'
import { FaPlus } from "react-icons/fa6";
import GradientButton from '../../GradientButton/GradientButton';

const AlertBox = () => {
    function cancelFunc() {
        console.log("cancel")
    }
    return (
        <div className={styles.parentContainer}>
            <div className={styles.header}>
                <div className={styles.title}>Alert</div>
                <FaPlus className={styles.cancel} onClick={cancelFunc} />
            </div>

            {/* description */}
            <div className={styles.infoContainer}>
                <div className={styles.description}>
                    You do not have enough credits for this generation. <br /> Please purchase a plan
                </div>
                {/* borderRule */}
                <div className={styles.borderRule}></div>

                {/* buttons*/}

                <div className={styles.btnsContainer}>
                    <GradientButton title="Ok" />
                </div>

            </div>
        </div>
    )
}

export default AlertBox