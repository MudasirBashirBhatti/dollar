import styles from '@/app/Components/PromptFilterMobile/PromptFilterMobile.module.css'
import MultiFuntionBtn from '../(liteComponents)/MultiFunctionBtn/MultiFuntionBtn'
const PromptFilterMobile = () => {
    return (
        <div className={styles.mainContainer}>
            {/* clear filter button */}
            <MultiFuntionBtn title="Clear Filters ⛌" />

            {/* product selection */}
            <select className='select' defaultValue='prompts' name="Product" id="Product">
                <option value="product" disabled>Product</option>
                <option value="prompts">Prompts</option>
                <option value="bundels">Bundels</option>
                <option value="apps">Apps</option>
            </select>

            {/* type selection */}
            <select className='select' defaultValue='all' name="Product" id="Product">
                <option value="type" disabled>Type</option>
                <option value="all">All</option>
                <option value="image">Image</option>
                <option value="text">Text</option>
            </select>

            {/* sorting */}
            <select className='select' defaultValue='trending' name="Product" id="Product">
                <option value="sortby" disabled>Sort by</option>
                <option value="trending">Trending</option>
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    )
}

export default PromptFilterMobile