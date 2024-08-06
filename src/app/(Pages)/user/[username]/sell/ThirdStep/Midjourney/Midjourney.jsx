import styles from '@/app/(Pages)/user/[username]/sell/ThirdStep/Midjourney/Midjourney.module.css'
import FieldInfo from '@/app/Components/(liteComponents)/FieldInfo/FieldInfo'
import InputImage from '@/app/Components/(liteComponents)/InputImage/InputImage'
import TextArea from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea'
import GradientButton from '@/app/Components/GradientButton/GradientButton'
const Midjourney = ({ onNext, onChange, imgFunc }) => {
    return (
        <div className={styles.parentContainer}>
            {/* field info */}
            <div className={styles.field}>
                <h2 className={styles.heading}>Prompt File</h2>
                <FieldInfo title="*Prompt" description="Put any variables in [square brackets]." />
                <FieldInfo description="Include all your Midjourney settings as tags within the prompt (e.g. --v 5 --q 2)." />
                {/* text area / */}
                <TextArea rows={17} placeholder="An Impressionist oil painting of [Flower] in a purple vase.." name="prompt" onChange={onChange} />
            </div>

            {/*slider and checkbox container */}
            <div className={styles.inputFields}>
                {/* 9 images input */}
                <div className={styles.inputImageContainer}>
                    <InputImage onChange={imgFunc} />
                </div>

                {/* prompt Instruction container */}
                <div className={styles.instructionContainer}>
                    <FieldInfo title="*Prompt Instructions" description="Any extra tips or examples for the buyer on how to use this prompt." />
                    <TextArea rows={15} placeholder="To get the most out of this prompt you need to.." onChange={onChange} name="promptInstructions" />
                </div>
            </div>

            {/* next button container */}
            <div className={styles.nextBtnContainer}>
                <GradientButton title="Next" onClick={onNext} />
            </div>

        </div>
    )
}

export default Midjourney