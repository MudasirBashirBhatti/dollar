import styles from '@/app/(Pages)/user/[username]/sell/ThirdStep/StableDiffusion/StableDiffusion.module.css'
import FieldInfo from '@/app/Components/(liteComponents)/FieldInfo/FieldInfo'
import InputField from '@/app/Components/(liteComponents)/InputField/InputField'
import InputImage from '@/app/Components/(liteComponents)/InputImage/InputImage'
import PromptCustomCheck from '@/app/Components/(liteComponents)/PromptCustomCheck/PromptCustomCheck'
import RangeSlider from '@/app/Components/(liteComponents)/RangeSlider/RangeSlider'
import TextArea from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea'
import GradientButton from '@/app/Components/GradientButton/GradientButton'
const StableDiffusion = ({ onChange, onNext, imgFunc }) => {
    return (
        <div className={styles.diffusionContainer}>
            <h2 className={styles.heading}>Pompt File</h2>

            {/* prompt field */}
            <div className={styles.field}>
                <FieldInfo title="*Prompt" description="Put any variable in [square brackets]." margin="0px" />
                <TextArea placeholder="An Impressionist oil painting of [Flower] in a purple vase.." margin="0px" rows={15} onChange={onChange} name="prompt" />
            </div>

            {/* stable diffusion settings */}
            <div className={styles.field}>
                <FieldInfo title="* Stable Diffusion settings" margin="0px" />
                <FieldInfo title="Model" margin="0px" />
                {/* model selection */}
                <select className='select' name="model" id="model" onChange={onChange}>
                    <option key="SD 3 Turbo" value="SD 3 Turbo">SD 3 Turbo</option>
                    <option key="SD 3" value="SD 3">SD 3</option>
                    <option key="SD XL v1.0" value="SD XL v1.0">SD XL v1.0</option>
                    <option key="SD XL v0.9" value="SD XL v0.9">SD XL v0.9</option>
                    <option key="SD v2.1-768" value="SD v2.1-768">SD v2.1-768</option>
                    <option key="SD v2.1" value="SD v2.1">SD v2.1</option>
                    <option key="SD v2.0-768" value="SD v2.0-768">SD v2.0-768</option>
                    <option key="SD v2.0" value="SD v2.0">SD v2.0</option>
                    <option key="SD v1.5" value="SD v1.5">SD v1.5</option>
                    <option key="SD v1.4" value="SD v1.4">SD v1.4</option>
                </select>
            </div>

            {/* sampler container */}
            <div className={styles.field}>
                <FieldInfo title="Sampler" margin="0px" />
                {/* sampler Selection */}
                <select className='select' name="sampler" id="sampler" onChange={onChange}>
                    <option key="None Specified" value="None Specified">None Specified</option>
                    <option key="ddim" value="ddim">ddim</option>
                    <option key="ddpm" value="ddpm">ddpm</option>
                    <option key="K_dpmpp_2m" value="K_dpmpp_2m">K_dpmpp_2m</option>
                    <option key="K_dpmpp_2s_ancestral" value="K_dpmpp_2s_ancestral">K_dpmpp_2s_ancestral</option>
                    <option key="K_dpm_2" value="K_dpm_2">K_dpm_2</option>
                    <option key="K_dpm_2_ancestral" value="K_dpm_2_ancestral">K_dpm_2_ancestral</option>
                    <option key="K_euler" value="K_euler">K_euler</option>
                    <option key="K_euler_ancestral" value="K_euler_ancestral">K_euler_ancestral</option>
                    <option key="K_heun" value="K_heun">K_heun</option>
                    <option key="K_lms" value="K_lms">K_lms</option>
                </select>
            </div>

            {/* input range container */}
            <div className={styles.range}>
                <RangeSlider name="imageWidth" onChange={onChange} title="Image width" min="512" max="1024" value="px" />
                <RangeSlider name="imageHeight" onChange={onChange} title="Image height" min="512" max="1024" value="px" />
                <RangeSlider name="cfgScale" onChange={onChange} title="Cfg scale" min="0" max="20" value=".0" />
                <RangeSlider name="steps" onChange={onChange} title="Steps" min="10" max="50" />
            </div>

            {/* seed optional container */}
            <div className={styles.field}>
                <FieldInfo title="Seed (optional)" margin="0px" />
                <InputField placeholder="Random Seed" name="seed" onchangeFunc={onChange} />
            </div>

            {/* flex direction column */}
            <div className={styles.field}>
                {/* clip guidence container */}
                <PromptCustomCheck name="clipGuidence" onChange={onChange} title="Clip guidence" />
            </div>

            {/* negative prompt container */}
            <div className={styles.field}>
                <FieldInfo title="Negative prompt" margin="0px" />
                <InputField name="negativePrompt" onchangeFunc={onChange} />
            </div>

            {/* image input container  */}
            <div className={styles.imageContainer}>
                <InputImage onChange={imgFunc} />
            </div>

            {/* prompt instruction container */}
            <div className={styles.field}>
                <FieldInfo title="*Prompt Instructions" description="Any extra tips or examples for the buyer on how to use this prompt." />
                <TextArea placeholder="To get the most out of this prompt you need to.." rows={15} name="promptInstructions" onChange={onChange} />
            </div>

            {/* next button */}
            <GradientButton title="Next" onClick={onNext} />

        </div>
    )
}

export default StableDiffusion