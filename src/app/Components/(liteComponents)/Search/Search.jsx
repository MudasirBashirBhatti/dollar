import styles from '@/app/Components/(liteComponents)/Search/Search.module.css'
import { IoSearchOutline } from "react-icons/io5";

const Search = (props) => {
    return (
        <div className={styles.inputContainer}>
            <input className={styles.input} type="text" name="" id="" placeholder={props.placeholder} />
            <IoSearchOutline className={styles.searchIcon} />
        </div>
    )
}

export default Search