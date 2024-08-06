import styles from '@/app/(Pages)/user/[username]/sell/ThirdStep/gpt/Gpt3.module.css'
import FieldInfo from '@/app/Components/(liteComponents)/FieldInfo/FieldInfo';
import TextArea from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea';
import GradientButton from '@/app/Components/GradientButton/GradientButton';
import EditableTextComponent from '@/app/Components/(liteComponents)/EditableTextComponent/EditableTextComponent';
import MultiFuntionBtn from '@/app/Components/(liteComponents)/MultiFunctionBtn/MultiFuntionBtn';
import InputField from '@/app/Components/(liteComponents)/InputField/InputField';
import { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";

const Gpt3 = ({ onNext, onChange, promptSamples }) => {
    // firstSelection 
    const [prompt, setprompt] = useState("chat");
    // second selection enableDisable
    const [divsOnType, setdivsOnType] = useState(true)
    // prompt engineSelection
    const [engine, setengine] = useState('disabled')
    const [divOnEngine, setdivOnEngine] = useState('none')
    // sample prompts
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
    // ..................logic for customised title for unique prompt ends ...............

    function selectType(e) {
        setprompt(e.target.value)
        if (e.target.value == "chat") {
            setdivsOnType(prev => !prev)
            setprompt(e.target.value)
            setdivOnEngine('none')
            setengine('disabled')
            onChange(e)
        } else {
            setdivsOnType(prev => !prev)
            setprompt(e.target.value)
        }
    }

    function engineType(e) {
        setengine(e.target.value)
        if (e.target.value !== 'disabled') {
            setdivOnEngine('block')
        }
        onChange(e)
    }

    return (
        <div className={styles.parentContainer}>

            {/* top selection */}
            <h2 className={styles.heading}>Prompt File</h2>

            {/* fieldContainer top */}
            <div className={styles.field}>
                <div className={styles.fieldType}>*GPT prompt type</div>
                <i className={styles.info}>Select what type of GPT prompt this is.</i>

                {/* selection  */}
                <select className='select' defaultValue="chat" value={prompt} onChange={selectType} style={{ width: '200px' }} name="gptPromptType" id="gptPromptType">
                    <option key="selectType" value="selectType" disabled>Select Gpt Type</option>
                    {/* <option key="Completion" value="Completion">Completion (Regular Gpt)</option> */}
                    <option key="chat" value="chat">Chat (Chat Gpt)</option>
                </select>
            </div>

            {/* info container */}
            <div className={styles.field} style={{ display: divsOnType ? "none" : "flex" }}>
                <div className={styles.fieldType}>*Prompt</div>
                <i className={styles.info}>Copy and paste the JSON GPT prompt file from the OpenAI playground. Ensure any editable parts of your prompt are indicated by [square brackets].
                </i>
                <i className={styles.info}>Watch our 19 second guide to the right (below on mobile) if you're stuck.</i>
                <TextArea onChange={promptBracesFunc} rows={20} />
            </div>

            {/* ..........................fieldInfo bottom...................... */}
            {/* fieldContainer top */}
            <div className={styles.field} style={{ display: `${divsOnType ? 'flex' : 'none'}` }}>
                <div className={styles.fieldType}>*Engine</div>
                <i className={styles.info}>What GPT Engine does this prompt use?</i>

                {/* selection  */}
                <select className='select' value={engine} defaultValue="disabled" style={{ width: '200px' }} name="gptPromptType" id="gptPromptType" onChange={engineType}>
                    <option value="disabled" disabled>Select Gpt engine</option>
                    <option value="Chat gpt-4o">Chat gpt-4o</option>
                    <option value="Chat gpt-4-turbo">Chat gpt-4-turbo</option>
                    <option value="Chat gpt-4">Chat gpt-4</option>
                    <option value="Chat gpt-3.5-turbo">Chat gpt-3.5-turbo</option>
                </select>

                {/* engine detail divs */}
                <div className={styles.engineDetail} style={{ display: divOnEngine }}>
                    {/* *prompt */}
                    <FieldInfo title="*Prompt" description="Copy and paste your prompt below. Ensure any editable parts of your prompt are indicated by [square brackets]." />
                    <TextArea onChange={promptBracesFunc} rows={6} />

                    {/* .......................... */}
                    {/* *Example outputs */}
                    <FieldInfo title="*Example outputs" description="Add 4 example outputs from your prompt." />
                    <TextArea margin="8px" value={outPutText} onChange={customOutPutFunc} rows={6} placeholder="Paste your output here" />
                    <MultiFuntionBtn gradient={outPutText == "" || sampleObj.length > 3 ? false : true} disabled={outPutText == "" || sampleObj.length > 3 ? true : false} onClick={examplePromptAddFunc} />

                    {/* prompts sample */}

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

                    {/* ........................ */}

                    {/* *Prompt Instructions */}
                    <FieldInfo title="*Prompt Instructions" description="Any extra tips or examples for the buyer on how to use this prompt." />
                    <TextArea rows={12} placeholder="To get the most out of this prompt you need to.." name="promptInstructions" onChange={onChange} />

                    {/* *Prompt Instructions */}
                    <FieldInfo title="*ChatGPT Share Link" description='Copy the "Share chat" link to you using this prompt in ChatGPT.' />
                    <InputField placeholder="https://chatgpt.com/share/00000000-0000-0000-0000-0000000000" name="gptLink" onchangeFunc={onChange} />

                    {/* button */}
                    <div className={styles.btnContainer}>
                        <GradientButton title="Next" onClick={onNext} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Gpt3;