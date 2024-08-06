import styles from '@/app/(Pages)/user/[username]/sell/ThirdStep/dall/Dall3.module.css'
import FieldInfo from '@/app/Components/(liteComponents)/FieldInfo/FieldInfo'
import GradientButton from '@/app/Components/GradientButton/GradientButton'
import TextArea from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea'
import InputImage from '@/app/Components/(liteComponents)/InputImage/InputImage'

const Dall3 = ({ onNext, onChange, imgFunc }) => {
    return (
        <div className={styles.parentContainer}>
            <h2 className={styles.heading}>Prompt File</h2>

            {/* version */}
            <FieldInfo title="Version" description="Select the version of DALL-E you're using." />
            <select className='select' name="version" id="version" onChange={onChange}>
                <option key="DALL-E 2" value="DALL-E 2">Dall-E 2</option>
                <option key="DALL-E 3" value="DALL-E 3">Dall-E 3</option>
            </select>

            {/* prompt */}
            <FieldInfo title="*Prompt" description="Put any variables in [square brackets]." />
            <TextArea placeholder="An Impressionist oil painting of [Flower] in a purple vase.." rows="18" name="describePrompt" id="describePrompt" onChange={onChange} />

            {/* *Prompt Instructions */}
            <FieldInfo title="*Prompt Instructions" description="Any extra tips or examples for the buyer on how to use this prompt." />
            <TextArea placeholder="To get the most out of this prompt you need to.." rows="18" name="promptInstruction" id="describePrompt" onChange={onChange} />

            {/* *Example images */}
            {/* <InputImage onChange={onChange} /> */}
            <InputImage onChange={imgFunc} />

            {/* next button */}
            <div className={styles.nextBtn}>
                <GradientButton title="Next" onClick={onNext} />
            </div>

        </div>
    )
}

export default Dall3;