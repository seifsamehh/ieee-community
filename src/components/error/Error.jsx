import React from 'react'
import { BubblyLink } from "react-bubbly-transitions";
import './style/error.css'

const Error = () => {
  return (
    <section className='error h-screen flex justify-center items-center flex-col gap-12'>
        <h1 className='text-center text-9xl'>404</h1>
        <h2 className='text-8xl font-thin text-center'>PAGE NOT FOUND</h2>
        <BubblyLink to="/" duration={1500} colorStart="#1a5581" colorEnd="#fff">
            Back to home
        </BubblyLink>
    </section>
  )
}

export default Error