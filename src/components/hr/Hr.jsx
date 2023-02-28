import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import mohamedWael from '../../assets/mohamed-wael.webp'
import beshoy from '../../assets/beshoy.webp'
import Header from '../header/Header'
import Footer from '../footer/Footer';
import './style/hr.css'

const Hr = () => {
  return (
    <main className="hr">
        <Helmet>
            <title>Human Resources</title>
        </Helmet>
        <Header/>
        {/* start intro */}
        <section className="intro h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown'>HR</h1>
                <h1 className='dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>HUMAN RESOURCES</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl'>WHAT IS HR ?</h1>
            </AnimationOnScroll>
            <p className='text-center'>Human Resources committee: Our role is to select the right people to work first...<br/> and secondly, it is to employ people in suitable places for them to give them the opportunity to be creative...<br/> and to provide each department with its needs of people in order to make it easier for them to perform their job to the fullest.</p>
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
                        <img src={mohamedWael} alt="mohamed wael" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>MOHAMED WAEL</h1>
                            <h5 className='text-center text-base'>HR HEAD</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={beshoy} alt="beshoy saad" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>BESHOY SAAD</h1>
                            <h5 className='text-center text-base'>HR VICE</h5>
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

export default Hr