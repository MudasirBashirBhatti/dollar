import styles from '@/app/(Pages)/user/[username]/sell/fourthstep/SelectCounry.module.css'
import GradientButton from '@/app/Components/GradientButton/GradientButton';
import countriesArr from '@/app/jsonFiles/countries';
import Link from 'next/link';
const SelectCountry = ({ onClick }) => {
    return (
        <div className={styles.parentContainer}>
            <h2 className={styles.heading}>Enable payouts</h2>
            <p className={styles.info}>Connect your bank account with Stripe to start receiving payouts from PromptBase for sales of your prompts.
            </p>
            <div className={styles.field}>
                <div className={styles.fieldTitle}>Country of residence
                </div>
                <div className={styles.fieldHelp}>We need to know this for sending payouts. Please read our <Link href="/support">FAQ</Link> if your country does not appear here.
                </div>

                {/* countries dropdown */}
                <select className='select' name="country" id="country">
                    {
                        countriesArr.map((e) =>
                            <option key={e.value}>{e.name}</option>
                        )
                    }
                </select>

                {/* next button proceed to payouts */}
                <div className={styles.btnContainer}>
                    <GradientButton title="Enable Payouts" />
                    <button onClick={onClick}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default SelectCountry;