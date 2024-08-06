import styles from '@/app/Components/PurchaseCredits/PurchaseCredits.module.css'
import { RxCross2 } from "react-icons/rx";
import GradientButton from '../GradientButton/GradientButton';
import PlanSubscribe from '../PlanSubscribe/PlanSubscribe';
const PurchaseCredits = () => {
    return (
        <div className={styles.purcaseCreditsContainer}>
            <div className={styles.header}>
                <RxCross2 className={styles.crossIcon} />
            </div>

            {/* content */}
            <div className={styles.content}>
                <h1 className={styles.mainHeading}>Purchase Credits</h1>
                <p className={styles.subHeading}>Leverage the power of AI & PromptBase with one of our plans. Subscription plan credits refresh on each billing cycle.
                </p>
                <p className={styles.subHeading}>You are currently on the free plan and receive <span>10 free credits per day</span>.
                </p>

                {/* top up credits */}
                <div className={styles.topUpContainer}>

                    {/* top up info */}
                    <div className={styles.innerContainer}>
                        <div>
                            <div className={styles.headingText}>Top-up credits</div>
                            <div className={styles.subHeading}>Choose from one of our credit packages.</div>
                        </div>
                        <div className={styles.btn}>
                            <GradientButton title="Top Cradits" />
                        </div>
                    </div>

                </div>

                {/* selection button */}
                <div className={styles.savings}>
                    <span></span>
                    <div className={styles.payYearlyBtn}>Pay Yearly — 20% Savings</div>
                    <div className={styles.payMonthlyBtn}>Pay Monthly</div>
                </div>


                {/* plans container */}
                <div className={styles.plansContainer}>
                    <PlanSubscribe />
                    <PlanSubscribe />
                    <PlanSubscribe />
                </div>
            </div>
        </div>
    )
}

export default PurchaseCredits