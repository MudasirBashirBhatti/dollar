'use client'
import React from 'react'

const page = ({ params }) => {
    const { username } = params
    return (
        <div>{username}</div>
    )
}

export default page