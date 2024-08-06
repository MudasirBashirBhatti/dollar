'use client'
import styles from '@/app/Components/(liteComponents)/categoriesBtn/CategoriesBtn.module.css'
const CategoriesBtn = ({ title, btnClass, onClick }) => {
    return (
        <button onClick={onClick} className={styles[btnClass]}> {title}</button >
    )
}

export default CategoriesBtn