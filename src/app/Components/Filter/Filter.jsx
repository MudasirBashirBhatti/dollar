'use client'
import styles from '@/app/Components/Filter/Filter.module.css'
import SingleFilter from '../(liteComponents)/SingleFilter/SingleFilter'
const Filter = () => {
    function getValue(e) {
        console.log(e.target.value)
    }
    return (
        <div className={styles.parentContainer}>
            <div>
                {/* products */}
                <div className={styles.heading}>Product</div>
                <SingleFilter label='Prompts' name="product" onClick={getValue} />
                <SingleFilter label='Bundles' name="product" onClick={getValue} />
                <SingleFilter label='Apps' name="product" onClick={getValue} />

                {/* Type */}
                <div className={styles.heading}>Type</div>
                <SingleFilter label='All' name="type" />
                <SingleFilter label='Image' name="type" />
                <SingleFilter label='Text' name="type" />

                {/* Sort by */}
                <div className={styles.heading}>Sort by</div>
                <SingleFilter label='Trending' name="sort" />
                <SingleFilter label='Most Popular' name="sort" />
                <SingleFilter label='Newest' name="sort" />
            </div>

        </div>
    )
}

export default Filter