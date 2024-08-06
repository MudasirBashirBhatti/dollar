'use client'
import styles from '@/app/Components/(liteComponents)/Loading/Loading.module.css'
import React, { useEffect, useState } from 'react';
const Loading = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000); // Run loading for at least 2 seconds

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    if (!visible) return null; // Don't render anything after 2 seconds

    return (
        <div className={styles.load}>
            <div>G</div>
            <div>N</div>
            <div>I</div>
            <div>D</div>
            <div>A</div>
            <div>O</div>
            <div>L</div>
        </div>
    )
}

export default Loading