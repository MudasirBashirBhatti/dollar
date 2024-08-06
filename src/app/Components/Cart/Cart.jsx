'use client'
import styles from '@/app/Components/Cart/Cart.module.css';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import SinglePromptCard from '../SinglePromptCard/SinglePromptCard';
import MultiFuntionBtn from '../(liteComponents)/MultiFunctionBtn/MultiFuntionBtn';
import CheckoutButton from '../(liteComponents)/CheckoutButton/CheckoutButton';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, hideCart } from '@/app/Redux/Features/cart/cartSlice';

const Cart = () => {
    const dispatch = useDispatch()
    const cartProducts = useSelector((item) => item.cart.cartItems || [])
    const cartVisible = useSelector((item) => item.cart.isVisible)
    // get total of all cart products
    let totalPayable = cartProducts.reduce((accumulator, currentItem) => {
        let price = accumulator + currentItem.price
        return parseFloat(price)
    }, 0)
    // for rounding of to 7 digits after decimal simply multipy and divide by 10^7 = 10000000 for 3, 10^3
    totalPayable = Math.round(totalPayable * 100) / 100
    return (
        <div className={styles.container} style={{ right: cartVisible ? '0%' : "-175%" }}>
            {/* header content */}
            <div className={styles.header}>
                <HiOutlineShoppingCart className={styles.icon} />
                <RxCross2 className={styles.icon} onClick={() => dispatch(hideCart())} />
            </div>

            {/* divider line */}
            <div className={styles.divider}></div>

            {/* cart items container */}
            <div className={styles.cartItemsContainer}>
                {/* single cart item */}
                {
                    cartProducts.map((cartItem, index) =>
                        <div className={styles.singleCartItem} key={index}>
                            <SinglePromptCard image={cartItem.Image_Url[0]} label={cartItem.promptType} title={cartItem.title} price={cartItem.price} />
                            <MultiFuntionBtn title="Remove" onClick={() => dispatch(removeFromCart(cartItem._id))} />
                        </div>
                    )
                }
            </div>

            {/* divider line */}
            <div className={styles.divider}></div>

            {/* discount plan container */}
            <div className={styles.discountContainer}>
                <p className={styles.infoText}>Add <b>4 more eligible items</b> to your cart to get a <b>7% discount on your purchase</b></p>

                <div className={styles.message}>1 item in your cart is not eligible for discounts</div>

                {/* discount wrapper */}
                <div className={styles.discountBarWrapper}>
                    <div className={styles.discountBar}>
                        <div className={styles.percentageCircle}>-5%</div>
                        <div className={styles.percentageCircle}>-7%</div>
                        <div className={styles.percentageCircle}>-10%</div>
                        <div className={styles.percentageCircle}>-12%</div>
                    </div>
                </div>

                {/* total wrapper */}
                <div className={styles.totalWrapper}>
                    <div className={styles.itemCounter}>Total ( <span>{cartProducts.length}</span> items)</div>
                    {/* pricingContainer */}
                    <div className={styles.pricingContainer}>
                        {/* original price */}
                        {/* <div className={styles.price}>
                            <div className={styles.singlePrice}>
                                <span>$</span>14.97
                            </div>
                            <div className={styles.strikeThrough}></div>
                        </div> */}

                        {/* price tag */}
                        {/* <div className={styles.priceTag}>-5%</div> */}

                        {/* Price after discount */}
                        <div className={styles.price}>
                            <div className={styles.originalPrice}>
                                <span>$</span>{totalPayable}
                            </div>
                        </div>
                    </div>
                </div>

                {/* checkout button */}
                <CheckoutButton />
            </div>

        </div>
    )
}

export default Cart