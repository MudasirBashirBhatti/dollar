import GradientButton from '@/app/Components/GradientButton/GradientButton'
// import styles from '@/app/Components//SellingProduct/SellingProduct.module.css'
import styles from '@/app/(Pages)/user/[username]/sell/firststep/First.module.css'
const SellingProduct = ({ onNext }) => {
    return (
        <div className={styles.mainContainer}>
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
                <GradientButton title="Sell Prompt" onClick={onNext} />
            </div>

            {/* rightCol */}
            <div className={styles.rightCol}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nnT9fXw2T4c" title="MGT211 Short Lecture 3_Highlighted Questions_MGT211short Lectures_Mid Term_Full Detail In Short Time" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div >
    )
}

export default SellingProduct