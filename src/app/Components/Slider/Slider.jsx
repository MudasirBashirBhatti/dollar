'use client';
import { useEffect, useState, useRef } from 'react';
import styles from '@/app/Components/Slider/Slider.module.css';
import { FaAngleRight } from 'react-icons/fa6';

const Slider = ({ component: Component, data }) => {
    const imageListRef = useRef(null);
    const [maxScrollLeft, setMaxScrollLeft] = useState(0);

    useEffect(() => {
        const imageList = imageListRef.current;
        const slideButtons = imageList.parentNode.querySelectorAll(`.${styles.slideButton}`);

        const updateMaxScrollLeft = () => {
            setMaxScrollLeft(imageList.scrollWidth - imageList.clientWidth);
        };

        const handleScroll = () => {
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'flex';
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
        };

        const initSlider = () => {
            updateMaxScrollLeft();
            slideButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const direction = button.id === styles.prevSlide ? -1 : 1;
                    const scrollAmount = imageList.clientWidth * direction;
                    imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                });
            });

            imageList.addEventListener('scroll', handleScroll);
        };

        initSlider();
    }, [maxScrollLeft, data]);

    return (
        <div className={styles.container}>
            <div className={styles.sliderWrapper}>
                <button id={styles.prevSlide} className={styles.slideButton}>
                    <FaAngleRight style={{ transform: 'rotate(180deg)' }} />
                </button>
                <div ref={imageListRef} className={styles.imageList} style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}>
                    {data.map((item, index) => (
                        <Component key={index} data={item} />
                    ))}
                </div>
                <button id={styles.nextSlide} className={styles.slideButton}>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
};

export default Slider;
