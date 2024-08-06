'use client'
import { jwtDecode } from "jwt-decode";
export const userData = () => {
    if (typeof window !== 'undefined') {
        if (document.cookie.includes('token=')) {
            const getCookieValue = (name) => {
                const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                return match ? decodeURIComponent(match[2]) : null;
            };

            const token = getCookieValue('token');
            const decodedToken = jwtDecode(token)
            return {
                userId: decodedToken.userId,
                profileHandle: decodedToken.profileHandle,
                userRole: decodedToken.userRole
            }
        }
        return {
            userId: null,
            profileHandle: null,
            userRole: null
        }
    }

}