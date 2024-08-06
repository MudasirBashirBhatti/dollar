import styles from '@/app/Components/Footer/Footer.module.css'
import { RiTwitterXLine } from "react-icons/ri";
import { LiaFacebookF } from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            {/* copyright text */}
            <div className={styles.copyrightText}>&copy; DollarPrompt 2024 | <span>A project by <a href="/" target='_blank'>TYBWork</a></span></div>

            {/* external Links */}
            <nav className={styles.footerNav}>
                <a href="/" target='_blank'>FAQ</a>
                <a href="/" target='_blank'>Contact</a>
                <a href="/" target='_blank'>Changelog</a>
                <a href="/" target='_blank'>Blog</a>
                <a href="/" target='_blank'>Privacy</a>
                <a href="/" target='_blank'>Terms</a>
                <a href="/" target='_blank'>Leaderboard</a>
                <a href="/" target='_blank'>Affiliates</a>
            </nav>
            {/* social icons container */}
            <nav className={styles.socialIcons}>
                <BsInstagram className={styles.singleSocialIcon} />
                <LiaFacebookF className={styles.singleSocialIcon} />
                <RiTwitterXLine className={styles.singleSocialIcon} />
                <BsReddit className={styles.singleSocialIcon} />
            </nav>
        </footer>
    )
}

export default Footer