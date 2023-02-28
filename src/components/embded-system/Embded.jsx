import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import c from '../../assets/c-programming.webp'
import ansimon from '../../assets/embded-head.webp'
import ahmedIbrahim from '../../assets/embded-vice.webp'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './style/embded.css'

const Embded = () => {
  return (
    <main className='embded'>
        <Helmet>
            <title>EMBEDDED SYSTEM</title>
        </Helmet>
        <Header/>
        {/* start intro */}
        <section className="intro h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown'>EMBEDDED</h1>
                <h1 className='dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>SYSTEM</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl'>WHAT IS EMBDED SYSTEMS ?</h1>
            </AnimationOnScroll>
            <p className='text-center'>The word embedded reflects the fact that these systems are usually an integral part of a larger system,<br/> known as the embedding system. Multiple embedded systems can co-exist in an embedding system.<br/> Embedded Systems are Application-specific systems which contain hardware and software<br/> tailored for a particular task and are generally part of a larger system.<br/> Historically, the term embedded systems was used to describe any non-PC-related system,<br/> but in time, the definition has grown to include any system that is dedicated to a particular functionality.</p>
        </section>
        {/* end about */}
        {/* start roadmap */}
        <section className="roadmap">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl'>What Is Our Roadmap ?</h1>
            </AnimationOnScroll>
            <div className="boxs flex flex-wrap justify-center items-center gap-6 p-8">
                <div className="box-1">
                    <h1 className='text-5xl text-center font-thin'>INTRODUCTION TO EMBEDED SYSTEM</h1>
                    <ul>
                        <li>- AVR MICROCONTROLLER ASSEMBLY.</li>
                        <li>- FIRST STEPS TO EMBEDED SYSTEM.</li>
                    </ul>
                </div>
                <div className="box-2">
                    <img src={c} alt="c programming language" />
                    <ul>
                        <li>-HOW TO PROGRAM REFRENCE.</li>
                        <li>-ECLIPSE DOCUMENTS.</li>
                    </ul>
                </div>
                <div className="box-3">
                    <h1 className='text-4xl text-center font-thin'>MICROCONTROLLER INTERFACING I.</h1>
                    <ul>
                        <li>-INTRODUCTION TO AVR.</li>
                        <li>-I/O PORTS.</li>
                        <li>-TIMERS.</li>
                        <li>-WATCH DOG TIMER.</li>
                    </ul>
                </div>
                <div className="box-4">
                    <h1 className='text-5xl text-center font-thin'>C FOR EMBEDED APPLICATIONS.</h1>
                    <ul>
                        <li>-EXERCISES.</li>
                    </ul>
                </div>
                <div className="box-5">
                    <h1 className='text-4xl text-center font-thin'>MICROCONTROLLER INTERFACING II.</h1>
                    <ul>
                        <li>-LCD.</li>
                        <li>-KEYPAD.</li>
                    </ul>
                </div>
                <div className="box-6">
                    <h1 className='text-5xl text-center font-thin'>SOFTWARE ENGINEERING</h1>
                </div>
            </div>
        </section>
        {/* end roadmap */}
        {/* start lectures */}
        <section className="lectures py-16 overflow-x-hidden">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl mb-12'>SESSIONS</h1>
            </AnimationOnScroll>
            <div className="lec-boxs flex justify-center flex-wrap gap-12">
                <div className="box-1 flex flex-col justify-center items-center gap-8">
                    <a href="https://drive.google.com/file/d/1AzDEQZOydHPxGWq0gI1HC6u4tZUoZlnX/view?usp=share_link" target="_blank">
                        <div className="lec-1 flex justify-center items-center">
                            <h1 className='text-center text-5xl'>SESSION ONE</h1>
                        </div>
                    </a>
                </div>
                <div className="box-2 flex flex-col justify-center items-center gap-8">
                    <a href="https://drive.google.com/drive/folders/1xSB9w6vdRly9R_FPDiGUdAQjcQGACY0H" target="_blank">
                        <div className="lec-2 flex justify-center items-center">
                            <h1 className='text-center text-5xl'>SESSION TWO</h1>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        {/* end lectures */}
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
                        <img src={ansimon} alt="ansimon" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>ANSIMON</h1>
                            <h5 className='text-center text-base'>EMBEDDED SYSTEM HEAD</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ahmedIbrahim} alt="ahmed ibrahim" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>AHMED IBRAHIM</h1>
                            <h5 className='text-center text-base'>EMBEDDED SYSTEM VICE</h5>
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

export default Embded