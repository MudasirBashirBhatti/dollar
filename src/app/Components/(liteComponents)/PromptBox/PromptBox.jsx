import styles from '@/app/Components/(liteComponents)/PromptBox/PromptBox.module.css'
import { RxCross2 } from "react-icons/rx";
import GradientButton from '../../GradientButton/GradientButton';
import BorderButton from '../../BorderButton/BorderButton';
const PromptBox = () => {
    return (
        <div className={styles.promptBoxContainer}>
            <div className={styles.header}>
                <div className={styles.headingText}>Out of credits</div>
                <RxCross2 className={styles.crossIcon} />
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    You do not have enough credits for this generation. Please purchase a plan to continue.
                </div>
                <div className={styles.border}>
                </div>
                <div className={styles.btns}>
                    <BorderButton title="Cancel" />
                    <GradientButton title="Continue" />
                </div>
            </div>
        </div>
    )
}

export default PromptBox