'use client'
import GradientButton from "../GradientButton/GradientButton"
import styles from '@/app/Components//SellingProduct/SellingProduct.module.css'
import { useState } from "react"
const SellingProduct = () => {
    const [sellPromptBtn, setsellPromptBtn] = useState('flex')
    function clickTest() {
        console.log("Button Clicked")
        setsellPromptBtn("none")
    }
    return (
        <div className={styles.mainContainer} style={{ display: sellPromptBtn }} >
            {/* leftCol */}
            <div className={styles.leftCol}>
                {/* heading Text */}
                <h2 className={styles.heading}>Start selling your prompts</h2>
                <div className={styles.mainText}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nostrum dolor accusantium quam ipsam porro animi ea autem atque cum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, obcaecati!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </div>
                {/* button component */}
                <GradientButton title="Sell Prompt" onClick={clickTest} />
            </div>

            {/* rightCol */}
            <div className="rightCol">
                <iframe width="600" height="337" src="https://www.youtube.com/embed/nnT9fXw2T4c" title="MGT211 Short Lecture 3_Highlighted Questions_MGT211short Lectures_Mid Term_Full Detail In Short Time" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div >
    )
}

export default SellingProduct