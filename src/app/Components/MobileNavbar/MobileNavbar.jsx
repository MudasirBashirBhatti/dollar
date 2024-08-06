"use client"
import styles from '@/app/Components/MobileNavbar/MobileNavbar.module.css'
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image'
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa6";
import { useState } from 'react';
import categoriesArr from '@/app/jsonFiles/promptsCategories';
import pageArr from '@/app/jsonFiles/pageLinks';
import { hideNav } from '@/app/Redux/Features/navbar/navbarSlice';
import { useDispatch, useSelector } from 'react-redux';

const MobileNavbar = () => {

    const dispatch = useDispatch();
    const hideNavbar = useSelector((state) => state.navbar.position)

    const [hideCategory, sethideCategory] = useState(null);
    const [hideSubCategory, sethideSubCategory] = useState(null);
    const [arrowIcon, setarrowIcon] = useState(null)
    const [subArrowIcon, setsubArrowIcon] = useState(null)
    function appendFunc(index) {
        sethideCategory(hideCategory === index ? null : index)
        setarrowIcon(arrowIcon === index ? null : index)
    }

    function appendSubCategory(index) {
        sethideSubCategory(hideSubCategory === index ? null : index)
        setsubArrowIcon(subArrowIcon === index ? null : index)
    }


    return (
        <div className={styles.parentContainer} style={{ left: `${hideNavbar}` }}>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                        <Image src="/assets/imageAssets/logo.png" width={30} height={30} />
                    </div>
                    <div className={styles.crossIcon}>
                        <RxCross2 onClick={() => dispatch(hideNav())} />
                    </div>
                </div>
                <div className={styles.explore}>Explore</div>
            </div>

            {/* ................................. */}
            {/* prompts categories */}
            {
                categoriesArr.map((e, index) =>
                    <div className={styles.promptCategories} key={index}>
                        <div className={styles.mainCategories} onClick={() => appendFunc(index)}>{e.name} <FaAngleRight className={styles.bottomIcon} style={{ transform: arrowIcon === index ? `rotate(-90deg)` : `rotate(90deg)` }} /></div>
                        <div className={styles.subCategories} style={{ display: hideCategory === index ? 'block' : 'none' }}>
                            {e.SubCategories.map((subCat, subIndex) => (
                                <div key={subIndex}>
                                    <div className={styles.subCategoryHeading} onClick={() => appendSubCategory(subIndex)}>
                                        {subCat.subCategoryTitle}
                                        <FaAngleRight style={{ transform: subArrowIcon === subIndex ? `rotate(-90deg)` : `rotate(90deg)` }} className={styles.bottomIcon} />
                                    </div>

                                    <div className={styles.subCategoryTitle} style={{ display: hideSubCategory === subIndex ? 'block' : 'none' }}>
                                        {
                                            subCat.innerCategroies.map((val, innerIndex) =>
                                                <div key={innerIndex} className={styles.innerCategories}>{val.name}</div>
                                            )
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
            {/* .................................... */}
            <div className={styles.pagesLinkContainer}>
                <div className={styles.general}>GENERAL</div>
                {
                    pageArr.map((linksData, linkIndex) =>
                        <div key={linkIndex} className={styles.linksContainer}>
                            <Link className={styles.link} href={linksData.link}>{linksData.title}</Link>
                        </div>
                    )
                }
            </div>
        </div >
    )
}
export default MobileNavbar;