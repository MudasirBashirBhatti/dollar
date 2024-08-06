'use client'
import { useEffect, useState } from 'react';
import styles from '@/app/Components/Tab/Tab.module.css'
import CategoriesBtn from '@/app/Components/(liteComponents)/categoriesBtn/CategoriesBtn';
import Search from '../(liteComponents)/Search/Search';
import { IoMdEye } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import Image from 'next/image';
import SellerPromptCard from '../SellerPromptCard/SellerPromptCard';
import axios from 'axios';
import Link from 'next/link';

const Tab = ({ sellerId, sellerHandle }) => {
    const [activeTab, setactiveTab] = useState('PROMPTS')
    const [promptState, setpromptState] = useState('Active')
    const [prompt, setprompt] = useState([])

    //switch categroy function for tab buttons
    function switchCategory(e) {
        const buttonText = e.target.innerText;
        setactiveTab(buttonText)
    }

    //switch prompt state function for tab buttons
    function switchPrompt(e) {
        const buttonText = e.target.innerText;
        setpromptState(buttonText)
    }
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/dalle/filter/?userId=${sellerId}&&status=${promptState.toLocaleLowerCase()}`)
            .then((response) => {
                setprompt(response.data)
            })
    }, [promptState])

    async function promptDeleteFunc(id) {
        await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt/dalle/delete/${id}`)
        setprompt((prevPrompts) => prevPrompts.filter((prompt) => prompt._id !== id))
    }

    return (
        <div className={styles.categories}>

            {/* categories buttons */}
            <div className={styles.btns}>
                <CategoriesBtn onClick={switchCategory} title="PROMPTS" btnClass={activeTab === "PROMPTS" ? 'active' : 'inActive'} />
                <CategoriesBtn onClick={switchCategory} title="ANALYTICS" btnClass={activeTab === "ANALYTICS" ? 'active' : 'inActive'} />
                <CategoriesBtn onClick={switchCategory} title="REVENUE" btnClass={activeTab === "REVENUE" ? 'active' : 'inActive'} />
            </div>

            {/* prompts section */}
            {
                activeTab === "PROMPTS" &&
                <div className={styles.prompt}>

                    <div className={styles.promptBtns}>
                        {/* Prompt State */}

                        <ul className={styles.promptStateBtn}>
                            <li onClick={switchPrompt} style={promptState === "Active" ? { opacity: "1" } : { opacity: '0.7' }}>Active
                                <span className={promptState === "Active" ? styles.active : styles.inActive}></span>
                            </li>
                            <li onClick={switchPrompt} style={promptState === "Pending" ? { opacity: "1" } : { opacity: '0.7' }}>
                                Pending <span className={promptState === "Pending" ? styles.active : styles.inActive}></span>
                            </li>
                            <li onClick={switchPrompt} style={promptState === "Paused" ? { opacity: "1" } : { opacity: '0.7' }}>
                                Paused <span className={promptState === "Paused" ? styles.active : styles.inActive}></span>
                            </li>
                        </ul>

                        {/* <CategoriesBtn title="Create Prompt" btnClass="active" /> */}
                        <Link href="/sell" className={styles.createPrompt}>Create Prompt</Link>
                    </div>

                    <div className={styles.sellerPrompt}>
                        {/* <SellerPromptCard /> */}
                        {prompt && prompt.map((e, index) =>
                            // <Link href={`/dallprompt/${e._id}`}>
                            <SellerPromptCard
                                previewPromptLink={`/dallprompt/${e._id}`}
                                updatePromptLink={`/user/${sellerHandle}/updateprompt/${e._id}`}
                                deletePromptFunc={() => promptDeleteFunc(e._id)}
                                key={index}
                                label={e.promptType}
                                image={e.Image_Url[0]}
                                description={e.description} />
                            // </Link>
                        )}

                    </div>
                </div>
            }

            {/* analytics section */}
            {
                activeTab === "ANALYTICS" &&
                <div className={styles.prompt}>
                    <div className={styles.userStats}>

                        {/* stats */}
                        <div className={styles.stats}>
                            <IoMdEye /> 100
                        </div>
                        {/* success badge */}
                        <div className={styles.successBadge}>
                            Top Seller <BsFillGearFill />
                        </div>

                        {/*---- profile sub details----- */}
                        {/* profile rank */}
                        <div className={styles.profileSubDetail}>
                            PromptBase Rank: <b className={styles.detail}>#8</b>
                        </div>

                        {/* joining date */}
                        <div className={styles.profileSubDetail}>
                            Joined: <b className={styles.detail}>September 2024</b>
                        </div>
                    </div>

                    {/* models wrapper */}
                    <div className={styles.modelsWrapper}>
                        <div className={styles.singleModel}>🎨 Dall-E</div>
                    </div>

                    {/* ----------profileWrapper--------- */}
                    <div className={styles.profileReviews}>
                        {/* ratings */}
                        <div className={styles.ratingContainer}>
                            <div className={styles.starRating}>4.9</div>
                            <div className={styles.starsContainer}>
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                            </div>
                            <div className={styles.reviewCount}>(<span>147</span>)</div>
                        </div>

                        {/* followers  */}
                        <div className={styles.numFollows}>
                            0<span> Followers</span>
                        </div>

                        {/* followings  */}
                        <div className={styles.numFollows}>
                            266<span> Followings</span>
                        </div>

                    </div>
                </div>
            }

            {/* revenue section */}
            {
                activeTab === "REVENUE" &&
                <div className={styles.prompt}>
                    <Image className={styles.graph} src="/assets/imageAssets/graph.svg" width={0} height={0} sizes='100vw' />
                </div>
            }

        </div >
    )
}

export default Tab