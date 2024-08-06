import styles from '@/app/Components/TopItemSingleList/TopItemSingleList.module.css';
import SinglePrompt from '../SinglePrompt/SinglePrompt';
const TopItemSingleList = () => {
    return (
        <div className={styles.container}>
            <SinglePrompt />
            <SinglePrompt />
            <SinglePrompt />
            <SinglePrompt />
        </div>
    )
}

export default TopItemSingleList