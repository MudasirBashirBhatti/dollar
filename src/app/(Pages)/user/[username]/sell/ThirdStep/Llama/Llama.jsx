import FieldInfo from "@/app/Components/(liteComponents)/FieldInfo/FieldInfo"
import styles from '@/app/(Pages)/user/[username]/sell/ThirdStep/Llama/Llama.module.css'
import TextArea from "@/app/Components/(liteComponents)/TextAreaComponent/TextArea"
import RangeSlider from "@/app/Components/(liteComponents)/RangeSlider/RangeSlider"
import MultiFuntionBtn from "@/app/Components/(liteComponents)/MultiFunctionBtn/MultiFuntionBtn"
import EditableTextComponent from "@/app/Components/(liteComponents)/EditableTextComponent/EditableTextComponent"
import { FaPlus } from "react-icons/fa6";

import { useState, useEffect } from "react"
import GradientButton from "@/app/Components/GradientButton/GradientButton"
const Llama = ({ onChange, onNext, promptSamples }) => {
    const [samplePromptArray, setsamplePromptArray] = useState([]);
    const [outPutText, setoutPutText] = useState('')
    const [samplePromptTitle, setsamplePromptTitle] = useState('');
    const [sampleObj, setsampleObj] = useState([])

    // unique sample text function
    function promptBracesFunc(e) {
        const uniqueTxt = e.target.value;
        setsamplePromptTitle(uniqueTxt);
    }

    // to get custom text
    function customOutPutFunc(e) {
        setoutPutText(e.target.value)
    }

    // to get add texts to array
    function examplePromptAddFunc() {
        const newSample = { title: samplePromptTitle, text: outPutText };
        setsamplePromptArray(prevArray => [...prevArray, outPutText]);
        setoutPutText('');
        setsampleObj(prev => [...prev, newSample]);
    }

    // delete sample
    function deleteSampleFunc(index) {
        setsampleObj(prev => prev.filter((_, i) => i !== index));
    }

    // ..................logic for customised title for unique prompt ...............

    const parseContent = (content, val) => {
        const parts = content.split(/(\[[^\]]+\])/g); // Split the content into parts
        return parts.map(part => {
            if (part.match(/\[[^\]]+\]/)) {
                // If the part is inside square brackets
                // const text = part.slice(1, -1); // Remove square brackets
                return `${val}`;
            } else {
                return `${part}`;
            }
        }).join('');
    };

    function handleEditableTextChange(index, value) {
        setsampleObj(prev => {
            const newSampleObj = [...prev];
            const updatedItem = { ...newSampleObj[index], title: `${parseContent(samplePromptTitle, value)}` };
            newSampleObj[index] = updatedItem;
            newSampleObj[index] = updatedItem;
            promptSamples(newSampleObj)
            return newSampleObj;
        });
    }
    useEffect(() => {
        promptSamples(sampleObj)
    }, [sampleObj])
    return (
        <div className={styles.LlamaContainer}>
            {/* main field */}
            <div className={styles.mainField}>
                <FieldInfo title="*Prompt" description="Put any variables in [square brackets]." />
                <TextArea placeholder="An Impressionist oil painting of [Flower] in a purple vase.." rows={15} margin="0px" onChange={promptBracesFunc} />
            </div>

            {/* model field */}
            <div className={styles.modelField}>
                <FieldInfo title="*Model" description="What Llama model does this prompt use?" />
                {/* selection tab */}
                <select style={{ width: "180px" }} defaultValue="Selelct Llama Model" className="select" name="LlamaModel" id="LlamaModel" onChange={onChange}>
                    <option key="Selelct Llama Model" value="Selelct Llama Model" disabled>Selelct Llama Model</option>
                    <option key="3 70b Chat" value="3 70b Chat">3 70b Chat</option>
                    <option key="3 8b Chat" value="3 8b Chat">3 8b Chat</option>
                    <option key="3 70b" value="3 70b">3 70b</option>
                    <option key="3 8b" value="3 8b">3 8b</option>
                    <option key="2 70b Chat" value="2 70b Chat">2 70b Chat</option>
                    <option key="2 13b Chat" value="2 13b Chat">2 13b Chat</option>
                    <option key="2 7b Chat" value="2 7b Chat">2 7b Chat</option>
                    <option key="2 70b" value="2 70b">2 70b</option>
                    <option key="2 7b" value="2 7b">2 7b</option>
                </select>
            </div>

            {/* range sliders */}
            <div className={styles.rangeSlider}>
                <RangeSlider onChange={onChange} name="maxTokens" title="Max Tokens" min="3" max="3993" />
                <RangeSlider onChange={onChange} name="maxTokens" title="Temperature" step=".05" min="0.0" max="3.0" />
                <RangeSlider onChange={onChange} name="topP" title="Top p" step="0.05" min="0" max="1" />
                <RangeSlider onChange={onChange} name="repitionPenalty" title="Repitition Penalty" step="0.05" min="0" max="3" />
            </div>

            {/* textUploader container */}
            <div className={styles.textUploaderContainer}>
                {/* example text container */}
                <div className={styles.exampleWrapper}>
                    <div>
                        <FieldInfo title="*Example outputs" description="Add 4 example outputs from your prompt." />
                        <TextArea margin="8px" value={outPutText} onChange={customOutPutFunc} rows={6} placeholder="Paste your output here" />
                    </div>
                    {/* multi functional button */}
                    <MultiFuntionBtn gradient={outPutText == "" || sampleObj.length > 3 ? false : true} disabled={outPutText == "" || sampleObj.length > 3 ? true : false} onClick={examplePromptAddFunc} />
                    {/* afterbutton clicked active */}
                    <div className={styles.samplesContainer}>
                        {sampleObj.map((item, index) => (
                            <div className={styles.sampleTextContainer} key={index}>
                                <textarea disabled value={item.text} name="" id=""></textarea>
                                <FaPlus className={styles.cancel} onClick={() => deleteSampleFunc(index)} />
                            </div>
                        ))}
                    </div>

                    {/* example prompts */}
                    <div style={{
                        display: sampleObj.length === 0 ? 'none'
                            : 'block'
                    }}>
                        <FieldInfo title="*Example Prompts" description="Provide the exact prompts shown in the examples for the customer. Type the variable values into the input boxes below." />
                    </div>
                    <div className={styles.exampleContainer}>
                        {sampleObj.map((item, index) => (
                            <div className={styles.sampleTextContainer2} key={index}>
                                <EditableTextComponent
                                    titleString={samplePromptTitle}
                                    onTextChange={(i, value) => handleEditableTextChange(index, value)}
                                />
                                <textarea key={index} disabled value={item.text} name="" id=""></textarea>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* *Prompt Instructions*/}
            <div className={styles.mainField}>
                <FieldInfo title="*Prompt Instructions" description="Any extra tips or examples for the buyer on how to use this prompt." />
                <TextArea placeholder="To get the most out of this prompt you need to.." rows={20} name="promptInstructions" onChange={onChange} />
            </div>

            <GradientButton title="Next" onClick={onNext} />
        </div>
    )
}

export default Llama