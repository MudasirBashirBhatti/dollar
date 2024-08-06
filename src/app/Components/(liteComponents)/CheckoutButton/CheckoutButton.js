'use client'
import { loadStripe } from '@stripe/stripe-js';
import GradientButton from '@/app/Components/GradientButton/GradientButton';
import { useSelector } from 'react-redux';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}`


export default function CheckoutButton() {
    const router = useRouter()
    let buyerId = null
    let userRole = null
    if (typeof window !== 'undefined') {
        const cookie = document.cookie
        if (cookie.includes('token=')) {

            const getCookieValue = (name) => {
                const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                return match ? decodeURIComponent(match[2]) : null;
            };

            const token = getCookieValue('token');

            const decodeToken = jwtDecode(token)
            if (decodeToken.userRole == 'user') {
                buyerId = decodeToken.userId
            }
            userRole = decodeToken.userRole

        }
    }

    const cartProducts = useSelector((item => item.cart.cartItems))
    console.log('cartProducts', cartProducts)
    const transformDataArray = (dataArray) => {
        return dataArray.map(item => ({
            a: {
                productId: item._id,
                name: item.title,
                price: Number(item.price),
                image: [item.Image_Url[0]],
            },
            b: {
                promptId: item._id,
                promptName: item.title,
                promptPrice: item.price,
                sellerId: item.userId,
                buyerId: buyerId,
            }

        }));
    };

    const cart = transformDataArray(cartProducts)
    let destructuredCart = cart.map(item => item.a)
    let destructuredPrompt = cart.map(item => item.b)
    const makePayment = async () => {
        if (typeof window !== 'undefined') {
            if (userRole == 'user' || userRole == 'seller') {

                try {
                    for (let item of destructuredPrompt) {
                        await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/createlog`, item)
                    }
                } catch (error) {
                    console.error('Error:', error);
                }

                const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);
                const body = {
                    products: destructuredCart
                }

                const headers = {
                    "content-type": 'application/json'
                }

                const response = await fetch(`${apiUrl}/create-checkout-session`, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(body)
                })

                const session = await response.json()
                const result = await stripe.redirectToCheckout({
                    sessionId: session.id
                })
                if (result.error) {
                    console.log(result.error)
                }
            } else {
                router.push('/login')
            }

        }
    }

    return (
        <div>
            <GradientButton onClick={makePayment} width="100%" title="Checkout" />
        </div>
    );
}
