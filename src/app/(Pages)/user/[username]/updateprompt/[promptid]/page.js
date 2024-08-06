'use client'
import styles from '@/app/(Pages)/user/[username]/updateprompt/[promptid]/updateprompt.module.css'
import FieldInfo from '@/app/Components/(liteComponents)/FieldInfo/FieldInfo';
import TextArea from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea';
import GradientButton from '@/app/Components/GradientButton/GradientButton';
import InputField from '@/app/Components/(liteComponents)/InputField/InputField';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/app/Components/(liteComponents)/Loading/Loading';

const Page = ({ params }) => {
    const router = useRouter();
    const { promptid } = params;

    const [promptData, setpromptData] = useState({
        price: '',
        version: '',
        title: '',
        description: '',
        describePrompt: '',
        promptInstruction: '',
        status: 'pending'
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/dalle/get/${promptid}`);
                let fetchedData = response.data;
                setpromptData(fetchedData);
            } catch (error) {
                console.error('Error fetching prompt data:', error);
            }
        };

        fetchData();
    }, [promptid]);

    // onchange function
    function handleOnChange(event) {
        const { name, value, type, files } = event.target;

        setpromptData((prevData) => {
            if (type === 'file') {
                return { ...prevData, myfiles: files };
            } else {
                return { ...prevData, [name]: value };
            }
        });
    }

    const updateDataFunc = async () => {
        await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/dalle/update/${promptid}`, { ...promptData, status: 'pending' })
        router.push(`/`)
        // alert("form updated successfully")
        // const formData = new FormData();
        // for (const key in promptData) {
        //     if (key === 'myfiles') {
        //         Array.from(promptData[key]).forEach(file => formData.append(key, file));
        //     } else {
        //         formData.append(key, promptData[key]);
        //     }
        // }

        // try {
        //     await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/dalle/update/${promptid}`, formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         },
        //         withCredentials: true
        //     });
        // } catch (error) {
        //     console.log("myError is here:", error);
        // }
    }

    if (!promptData) {
        return <Loading />
    }

    return (
        <div className={styles.parentContainer}>
            <h2 className={styles.heading}>Prompt Details</h2>

            {/* name field */}
            <div>
                <FieldInfo title="Name" description="Suggest a title for this prompt." />
                <InputField
                    placeholder="Movie to Emoji Generator"
                    name="title"
                    id="title"
                    value={promptData.title}
                    onchangeFunc={handleOnChange}
                />
            </div>

            {/* textArea field */}
            <div>
                <FieldInfo title="Description" description="Describe what your prompt does to a potential buyer. A more detailed description will increase your sales." />
                <TextArea
                    placeholder="Movie to Emoji Generator"
                    rows="3"
                    name="description"
                    id="description"
                    margin="0px"
                    value={promptData.description}
                    onChange={handleOnChange}
                />
            </div>

            {/* price */}
            <div>
                <FieldInfo title="Estimated Price" description="What do you think the price of this prompt should be?" />
                <div className={styles.pricingContainer}>
                    <select
                        className="select"
                        // defaultValue='3.99'
                        value={promptData.price}
                        name="price"
                        id="price"
                        style={{ width: '100px' }}
                        onChange={handleOnChange}
                    >
                        <option key="2.99" value="2.99">$2.99</option>
                        <option key="3.99" value="3.99">$3.99</option>
                        <option key="4.99" value="4.99">$4.99</option>
                        <option key="5.99" value="5.99">$5.99</option>
                        <option key="6.99" value="6.99">$6.99</option>
                    </select>
                </div>
            </div>

            {/* version */}
            <div>
                <FieldInfo title="Version" description="Select the version of DALL-E you're using." />
                <select
                    className="select"
                    value={promptData.version}
                    name="version"
                    id="version"
                    onChange={handleOnChange}
                >
                    <option key="DALL-E 2" value="DALL-E 2">Dall-E 2</option>
                    <option key="DALL-E 3" value="DALL-E 3">Dall-E 3</option>
                </select>
            </div>

            {/* prompt */}
            <div>
                <FieldInfo title="*Prompt" description="Put any variables in [square brackets]." />
                <TextArea
                    placeholder="An Impressionist oil painting of [Flower] in a purple vase.."
                    rows="18"
                    name="describePrompt"
                    margin="0px"
                    id="describePrompt"
                    value={promptData.describePrompt}
                    onChange={handleOnChange}
                />
            </div>

            {/* *Prompt Instructions */}
            <div>
                <FieldInfo title="*Prompt Instructions" description="Any extra tips or examples for the buyer on how to use this prompt." />
                <TextArea
                    placeholder="To get the most out of this prompt you need to.."
                    rows="18"
                    name="promptInstruction"
                    margin="0px"
                    id="promptInstruction"
                    value={promptData.promptInstruction}
                    onChange={handleOnChange}
                />
            </div>

            {/* *Example images */}
            {/* <div>
                <InputImage onChange={handleOnChange} />
            </div> */}
            <GradientButton title="Update Prompt" onClick={updateDataFunc} />
        </div>
    );
};
export default Page;
