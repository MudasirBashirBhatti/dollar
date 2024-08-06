'use client'
import styles from '@/app/Components/PromptDetails/PromptDetails.module.css'
import PromptType from '../(liteComponents)/PromptType/PromptType';
import GradientButton from '../GradientButton/GradientButton';
import { useState } from "react";

const PromptDetails = () => {
    const [sellPromptBtn, setsellPromptBtn] = useState('block')
    function clickTest() {
        console.log("Button Clicked")
        setsellPromptBtn("none")
    }
    return (
        <div style={{ display: sellPromptBtn }}>
            {/* heading */}
            <h2 className={styles.heading}>Prompt Details</h2>

            {/* info text */}
            <div className={styles.infoContainer}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aperiam!</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            {/* prompt type */}
            <PromptType />

            {/* button */}
            <GradientButton title="Next" onClick={clickTest} />

        </div>
    )
}

export default PromptDetails;