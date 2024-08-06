'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineMessage } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";
import styles from "@/app/Components/Header/Header.module.css"
import { RxHamburgerMenu } from "react-icons/rx";

// bottom nav imports
import { TbBoxModel } from "react-icons/tb";
import Search from "../(liteComponents)/Search/Search";
import { useDispatch } from "react-redux";
import { showNav } from "@/app/Redux/Features/navbar/navbarSlice";
import categoriesArr from "@/app/jsonFiles/promptsCategories";
import { ImArrowRight2 } from "react-icons/im";
import { PiCaretRightBold } from "react-icons/pi";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import axios from "axios";
import { showCart } from "@/app/Redux/Features/cart/cartSlice";
import { userData } from "@/app/utilities/userData";

const Header = () => {
    const router = useRouter();

    const [categoryHeading, setcategoryHeading] = useState()
    const [subHeadingTitle, setsubHeadingTitle] = useState()
    const [seller, setseller] = useState({ text: "Login", link: "/login" })
    const [showHeaderBox, setshowHeaderBox] = useState(false)
    const [checkActiveHeader, setcheckActiveHeader] = useState(false)
    const [subCategory, setsubCategory] = useState([]);
    const [innerLinks, setinnerLinks] = useState([])
    const dispatch = useDispatch();
    const [logout, setlogout] = useState(false)
    const [role, setrole] = useState('user')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (document.cookie.includes('token=')) {
                const token = document.cookie;
                const decodedToken = jwtDecode(token)
                setrole(decodedToken.userRole)
                const userId = decodedToken.userId
                const profileHandle = decodedToken.profileHandle
                if (role === "seller") {
                    // setseller({ text: "Profile", link: `/seller/${userId}` })
                    setseller({ text: "Profile", link: `/user/${profileHandle}/seller-dashboard` })
                    setlogout(true)
                } else if (role === "user") {
                    setseller({ text: "becomeSeller", link: '/sellerinfo' })
                    setlogout(true)
                } else if (role === 'admin') {
                    setseller({ text: 'Admin', link: '/admin' })
                    setlogout(true)
                    // router.push('/admin')
                }
                else {
                    setseller({ text: "Login", link: '/login' })
                    setlogout(false)
                }
            }
        }
    }, [role])

    // logout Function
    const logoutFunc = async () => {
        try {
            await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/logout`, {
                withCredentials: true
            })
            setseller({ text: 'Login', link: '/login' })
            setlogout(false)
            router.push('/')
            setrole('user')
        } catch (error) {
            console.log(`Failed to logout ${error}`)
        }
    }

    // ...........................functions for hide/show sub categories......................

    const [hideTimeOut, sethideTimeOut] = useState(null)

    // show sub categories container
    const showSubCategories = (val, index) => {
        clearTimeout(hideTimeOut)
        setcheckActiveHeader(true)
        setsubCategory(val.SubCategories);
        setcategoryHeading(val.name);
    }

    const hideSubCategories = () => {
        sethideTimeOut(setTimeout(() => {
            setcheckActiveHeader(false)
        }, 200)
        )
    }

    const categoryContainer = () => {
        clearTimeout(hideTimeOut)
        setcheckActiveHeader(true)
    }

    // showing innerLinks function 
    function innerLinksFunc(showCategory) {
        setsubHeadingTitle(showCategory.subCategoryTitle);
        setinnerLinks(showCategory.innerCategroies);
    }

    const cartProducts = useSelector((state) => state.cart.cartItems)



    return (
        <>
            <header className={styles.headerContainer}>
                {/* ------------- top header------------- */}
                <div className={styles.topHeader}>
                    {/* logo  */}
                    <Link className={styles.desktopLogo} href='/'><img src="/assets/imageAssets/dollarprompt-desktop-logo.svg" style={{ width: "150px" }} alt="site-logo" /></Link>
                    <Link className={styles.mobileLogo} href='/'><img style={{ width: '36px' }} src="/assets/imageAssets/dollarprompt-mobile-logo.svg" alt="site-logo" /></Link>

                    {/* search component */}
                    <Search placeholder="Search Prompts" />

                    {/* top nav icons */}
                    <nav className={styles.mainNav}>
                        <ul>
                            <li><Link className={styles.link} style={{ display: role === 'admin' ? 'none' : 'block' }} href="/Marketplace">Marketplace</Link></li>
                            <li><Link className={styles.link} href={seller.link}>{seller.text}</Link></li>
                            <li className={styles.link} style={{ display: `${logout == true ? 'block' : 'none'}` }} onClick={logoutFunc}>Logout</li>
                        </ul>
                    </nav>
                    <div className={styles.topNavIconsContainer} style={{ display: role === "admin" ? 'none' : 'flex' }}>
                        <MdOutlineMessage className={styles.topNavIcons} />
                        <GoBell className={`${styles.topNavIcons} ${styles.bellIcon}`} />
                        <div className={styles.cartContainer}>
                            <HiOutlineShoppingCart className={styles.topNavIcons} onClick={() => dispatch(showCart())} />
                            <div className={styles.cartCounter}>{cartProducts.length}</div>
                        </div>
                        <RxHamburgerMenu className={`${styles.topNavIcons} ${styles.hamburgerIcon}`} onClick={() => dispatch(showNav())} />
                    </div>
                </div>
                {/*------------- bottom navbar --------------- */}
                <nav className={styles.bottomNav} style={{ display: role === 'admin' ? 'none' : 'block' }}>
                    <ul>
                        {
                            categoriesArr.map((val, index) =>
                                <li onMouseLeave={hideSubCategories} onMouseEnter={() => showSubCategories(val, index)} key={index}><TbBoxModel /> <span>{val.name}</span></li>
                            )
                        }
                    </ul>
                </nav>
            </header>
            {/* subcategories links */}
            <div className={styles.subCategoriesContainer} style={{ display: `${checkActiveHeader ? 'flex' : 'none'}` }}
                onMouseOver={categoryContainer} onMouseLeave={hideSubCategories}
            >

                <div className={styles.subCategories}>

                    <div className={styles.categoryHeading}>All {categoryHeading}<ImArrowRight2 className={styles.arrowIcons} /></div>

                    {
                        subCategory.map((val, subIndex) => <div className={styles.singleSubCategory} key={subIndex} onMouseEnter={() => innerLinksFunc(val, subIndex)}>{val.subCategoryTitle} <PiCaretRightBold className={styles.arrowIcons} /></div>
                        )
                    }
                </div>

                <div className={styles.innerPromptLinksContainer}>
                    <div className={styles.subHeadingTitle}>All {subHeadingTitle}</div>
                    {
                        innerLinks.map((e) =>
                            <div className={styles.innerPromptLink}>{e.name}</div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Header;