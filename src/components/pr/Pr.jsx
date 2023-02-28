import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import mira from '../../assets/mira.webp'
import doha from '../../assets/doha.webp'
import Header from '../header/Header'
import Footer from '../footer/Footer';
import './style/pr.css'

const Pr = () => {
  return (
    <main className="pr">
        <Helmet>
            <title>Public Relations</title>
        </Helmet>
        <Header/>
        {/* start intro */}
        <section className="intro h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown'>PR</h1>
                <h1 className='dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>PUBLIC RELATIONS</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl'>WHAT IS PR ?</h1>
            </AnimationOnScroll>
            <p className='text-center'>Public Relations committee :It is our responsibility to maintain the image of IEEE in way meets<br/> our vision and mission,sending needed emails for inviting Obour students for IEEE events<br/> make deals with sponsers and make partnerships with other communities.</p>
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
                        <img src={mira} alt="mira makram" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>MIRA MAKRAM</h1>
                            <h5 className='text-center text-base'>PR HEAD</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={doha} alt="doha emam" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>DOHA EMAM</h1>
                            <h5 className='text-center text-base'>PR VICE</h5>
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

export default Pr