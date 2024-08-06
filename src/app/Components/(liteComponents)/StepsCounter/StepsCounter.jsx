'use client'
import { useState } from 'react';
import styles from '@/app/Components/(liteComponents)/StepsCounter/StepsCounter.module.css';
import { LiaAngleLeftSolid } from "react-icons/lia";

const StepsCounter = ({ onPrev, width, stepCount }) => {
    const [backBtn, setbackBtn] = useState('0px')
    function backBtnEnter() {
        setbackBtn('4px')
    }
    function backBtnLeave() {
        setbackBtn('0px')
    }
    return (
        <div className={styles.container}>
            <div className={styles.backBtn} onMouseLeave={backBtnEnter} onMouseEnter={backBtnLeave} onClick={onPrev} style={{ transform: `translateX(${backBtn})` }}>
                <LiaAngleLeftSolid />
                Back
            </div>
            <div className={styles.stepsPercentage}>
                <div className={styles.realPercentage} style={{ width: `${width}%` }}></div>
            </div>
            <div className={styles.stepCounter}>Step {stepCount}/5</div>
        </div>
    )
}

export default StepsCounter;