import styles from '@/app/Components/PlanSubscribe/PlanSubscribe.module.css'
import TierPerk from '../(liteComponents)/TierPerk/TierPerk'
import GradientButton from '../GradientButton/GradientButton'
const PlanSubscribe = () => {
    return (
        <div className={styles.container}>
            {/* inner container */}
            <div className={styles.innerContainer}>
                {/* type */}
                <h4 className={styles.type}>
                    Basic
                </h4>

                {/* price */}
                <div className={styles.price}>
                    $ <span>9.99</span>/month
                </div>

                {/* subscription tier content */}
                <div className={styles.subscriptionTierContent}>
                    <div>{/* <div className={styles.info}> */}
                        <div className={styles.creditPerMonth}>1,250 credits per month</div>
                        <div className={styles.subscriptionTier}>
                            $0.0080/credit
                        </div></div>
                    <div className={styles.border}>
                    </div>
                    {/* </div> */}
                    <div>
                        <TierPerk />
                        <TierPerk />
                        <TierPerk />
                        <TierPerk />
                    </div>
                </div>

                {/* button */}
                <GradientButton title="Subscribe" />

            </div>

        </div>

    )
}

export default PlanSubscribe