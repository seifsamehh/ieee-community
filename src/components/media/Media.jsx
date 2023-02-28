import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import soliman from '../../assets/soliman.webp'
import ahmedHamdy from '../../assets/ahmed-hamdy.webp'
import Header from '../header/Header'
import Footer from '../footer/Footer';
import './style/media.css'

const Media = () => {
  return (
    <main className="media">
        <Helmet>
            <title>Media</title>
        </Helmet>
        <Header/>
        {/* start intro */}
        <section className="intro h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown animate__delay-1s'>Media</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl'>WHAT IS MEDIA ?</h1>
            </AnimationOnScroll>
            <p className='text-center'>Digital And Media Committee. It is our responsibility to control the work for Media<br/> and its associated public bodies, include Designs And editing videos for the community.</p>
        </section>
        {/* end about */}
        {/* start team */}
        <section className="team py-16 overflow-x-hidden">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl mb-12'>TEAM</h1>
            </AnimationOnScroll>
            <div className="cards flex justify-center flex-wrap gap-16">
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={soliman} alt="soliman al-sayed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>SOLIMAN AL-SAYED</h1>
                            <h5 className='text-center text-base'>MEDIA HEAD</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ahmedHamdy} alt="ahmed hamdy" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>AHMED HAMDY</h1>
                            <h5 className='text-center text-base'>MEDIA VICE</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end team */}
        <Footer/>
    </main>
  )
}

export default Media