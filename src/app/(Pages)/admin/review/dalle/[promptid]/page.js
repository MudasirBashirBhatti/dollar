'use client';
import styles from '@/app/(Pages)/admin/review/dalle/[promptid]/dalle.module.css';
import axios from 'axios';
import FieldInfo from '@/app/Components/(liteComponents)/FieldInfo/FieldInfo';
import GradientButton from '@/app/Components/GradientButton/GradientButton';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Loading from '@/app/Components/(liteComponents)/Loading/Loading';

const Page = ({ params }) => {
    const router = useRouter();
    const { promptid } = params;
    const [promptData, setPromptData] = useState(null); // Initialize with an empty object
    const [status, setstatus] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/getprompt?_id=${promptid}`, {
                    withCredentials: true,
                });
                setPromptData(response.data[0]);
                console.log(response.data[0])
            } catch (error) {
                console.error('Error fetching prompt data:', error);
            }
        };
        fetchData();
    }, [promptid]);
    if (!promptData) return <Loading />

    const updateStatus = async (e) => {
        const target = e.target.innerText;
        const newStatus = target === 'Approve' ? 'active' : 'paused';
        setstatus(newStatus)
        await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/admin/dalle/update/${promptid}`, { status: newStatus }, {
            withCredentials: true
        })
        router.push('/admin')
    }

    return (
        <div className={styles.parentContainer}>
            {/* left container */}
            <div className={styles.leftContainer}>
                {/* prompt Type */}
                <div>
                    <FieldInfo title="Prompt Type" color="yellow" margin="0px" />
                    <div className={styles.detail}>{promptData.promptType}</div>
                </div>

                {/* prompt version */}
                <div>
                    <FieldInfo title="Prompt Version" color="yellow" margin="0px" />
                    <div className={styles.detail}>{promptData.version}</div>
                </div>

                {/* prompt title */}
                <div>
                    <FieldInfo title="Prompt Title" color="yellow" margin="0px" />
                    <div className={styles.detail}>{promptData.title}</div>
                </div>

                {/* prompt description */}
                <div>
                    <FieldInfo title="Prompt Description" color="yellow" margin="0px" />
                    <div className={styles.detail}>{promptData.description}</div>
                </div>

                {/* prompt instruction */}
                <div>
                    <FieldInfo title="Prompt Instruction" color="yellow" margin="0px" />
                    <div className={styles.detail}>{promptData.promptInstruction}</div>
                </div>

                {/* Describe prompt */}
                <div>
                    <FieldInfo title="Describe Prompt" color="yellow" margin="0px" />
                    <div className={styles.detail}>{promptData.describePrompt}</div>
                </div>

                {/* price */}
                <div>
                    <FieldInfo title="Price" color="yellow" margin="0px" />
                    <div className={styles.detail}>{promptData.price}</div>
                </div>

                {/* price */}
                <div>
                    <FieldInfo title="Status" color="yellow" margin="0px" />
                    <div className={styles.detail}>{promptData.status}</div>
                </div>

                {/* userId */}
                <div>
                    <FieldInfo title="userId" color="yellow" margin="0px" />
                    <div className={styles.detail}>{promptData.userId}</div>
                </div>

                {/* buttons */}
                <div className={styles.btnContainer}>
                    <GradientButton title="Approve" onClick={updateStatus} />
                    <GradientButton title="Reject" onClick={updateStatus} />
                </div>

            </div>

            {/* right container */}
            <div className={styles.rightContainer}>
                {
                    promptData.Image_Url.map((imageUrl, index) =>
                        <Image key={index} src={imageUrl} width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} alt={index + 1} />
                    )
                }
            </div>

        </div>
    );
};

export default Page;
