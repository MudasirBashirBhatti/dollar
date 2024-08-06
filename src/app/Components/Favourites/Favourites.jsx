import React from 'react'
import styles from "@/app/Components/Favourites/Favourites.module.css"

const Favourites = (props) => {
    return (
        <div className={styles.favouriteContainer}>
            <div className={styles.counter}><span>4</span>{props.icon}</div>
            <div className={styles.text}>{props.text}</div>
        </div>
    )
}

export default Favourites