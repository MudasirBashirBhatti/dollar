import styles from '@/app/(Pages)/user/[username]/sell/ThirdStep/leonardo/Leonardo.module.css'
import FieldInfo from '@/app/Components/(liteComponents)/FieldInfo/FieldInfo'
import InputField from '@/app/Components/(liteComponents)/InputField/InputField'
import InputImage from '@/app/Components/(liteComponents)/InputImage/InputImage'
import PromptCustomCheck from '@/app/Components/(liteComponents)/PromptCustomCheck/PromptCustomCheck'
import RangeSlider from '@/app/Components/(liteComponents)/RangeSlider/RangeSlider'
import TextArea from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea'
import GradientButton from '@/app/Components/GradientButton/GradientButton'
const Leonardo = ({ onNext, onChange, imgFunc }) => {
    return (
        <div className={styles.parentContainer}>
            {/* field info */}
            <div className={styles.field}>
                <h2 className={styles.heading}>Prompt File</h2>
                <FieldInfo title="*Prompt" description="Put any variables in [square brackets]." />
                {/* text area / */}
                <TextArea rows={10} placeholder="An Impressionist oil painting of [Flower] in a purple vase.." onChange={onChange} name="imageName" />
            </div>

            {/* field info */}
            <div className={styles.field}>
                <FieldInfo title="*Leonardo Ai settings" />
                {/* model  */}
                <div>
                    <FieldInfo title="Model" margin="0px" />
                    <select style={{ width: "200px" }} name="leonardoModel" id="leonardoModel" onChange={onChange} className="select">
                        <option key="Leonardo Lightenging XL" value="Leonardo Lightening XL">Leonardo Lightening XL</option>
                        <option key="Leonardo Anime XL" value="Leonardo Anime XL">Leonardo Anime XL</option>
                        <option key="Leonardo Diffusion XL" value="Leonardo Diffusion XL">Leonardo Diffusion XL</option>
                        <option key="Leonardo Kino XL" value="Leonardo Kino XL">Leonardo Kino XL</option>
                        <option key="AlbedoBase XL" value="AlbedoBase XL">AlbedoBase XL</option>
                        <option key="DreamShaper v7" value="DreamShaper v7">DreamShaper v7</option>
                        <option key="Absolute Reality v1.6" value="Absolute Reality v1.6">Absolute Reality v1.6</option>
                        <option key="Leonardo Diffusion" value="Leonardo Diffusion">Leonardo Diffusion</option>
                        <option key="RPG 4.0" value="RPG 4.0">RPG 4.0</option>
                        <option key="3D Animation Style" value="3D Animation Style">3D Animation Style</option>
                        <option key="SDXL 0.9" value="SDXL 0.9">SDXL 0.9</option>
                        <option key="Stable Diffusion 1.5" value="Stable Diffusion 1.5">Stable Diffusion 1.5</option>
                        <option key="Stable Diffusion 2.1" value="Stable Diffusion 2.1">Stable Diffusion 2.1</option>
                    </select>
                </div>
            </div>

            {/*slider and checkbox container */}
            <div className={styles.inputFields}>
                <RangeSlider onChange={onChange} name="imageWidth" title="Image width" value="px" min={512} max={1024} />
                <RangeSlider onChange={onChange} name="imageHeight" title="Image Height" value="px" min={512} max={1024} />
                <RangeSlider onChange={onChange} name="guidanceScale" title="Guidance Scale" value=".0" min={0} max={20} />
                <PromptCustomCheck onChange={onChange} name="promptMagic" title="Prompt Magic" />
                <PromptCustomCheck onChange={onChange} name="photoReal" title="PhotoReal" />
                <PromptCustomCheck onChange={onChange} name="alchemy" title="Alchemy" />

                {/* input text field */}
                <div className={styles.inputTextField}>
                    <FieldInfo title="Negative prompt" margin="0px" />
                    <InputField placeholder="" name="nativePrompt" onchangeFunc={onChange} />
                </div>

                {/* 7 images input */}
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

export default Leonardo