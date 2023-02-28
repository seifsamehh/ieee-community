import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import Header from '../header/Header';
import csharp from '../../assets/Csharp.webp'
import sqlServer from '../../assets/sql-server.webp'
import youssefSayed from '../../assets/youssef-sayed.webp'
import omar from '../../assets/omar-sayed.webp'
import assignment1 from '../../documents/01-Assginment.pdf'
import Footer from '../footer/Footer';
import './style/desktop.css'

const Desktop = () => {
  return (
    <main className="desktop">
        <Helmet>
            <title>Desktop Application</title>
        </Helmet>
        <Header/>
        {/* start intro */}
        <section className="intro h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown'>DESKTOP</h1>
                <h1 className='dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>APPLICATION</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl'>WHAT IS DESKTOP APPLICATION ?</h1>
            </AnimationOnScroll>
            <p className='text-center'>Desktop Application Development Committee : Our Role is To Learn Students How To Develop Desktop apps<br/> interact with the operating system and provide a user interface for input and output Using The Best and Newest Technologies.</p>
        </section>
        {/* end about */}
        {/* start roadmap */}
        <section className="roadmap">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl'>What Is Our Roadmap ?</h1>
            </AnimationOnScroll>
            <div className="boxs flex flex-wrap justify-center items-center gap-6 p-8">
                <div className="box-1">
                    <img src={csharp} alt="c#" />
                    <p>C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.</p>
                </div>
                <div className="box-2">
                    <img src={sqlServer} alt="sql server" />
                    <p>Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network.</p>
                </div>
            </div>
        </section>
        {/* end roadmap */}
        {/* start lectures */}
        <section className="lectures py-16 overflow-x-hidden">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl mb-12'>SESSIONS</h1>
            </AnimationOnScroll>
            <div className="lec-boxs flex justify-evenly flex-wrap gap-12">
                <div className="box-1 flex flex-col justify-center items-center gap-8">
                    <a href="https://drive.google.com/file/d/17XltCM3nZOealRZ5RwqpxjXraG_IErc7/view?usp=share_link" target="_blank">
                        <div className="lec-1 flex justify-center items-center">
                            <h1 className='text-center text-5xl'>SESSION ONE</h1>
                        </div>
                    </a>
                    <a href={assignment1} download>
                        <button>Assignment<br/>One</button>
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
                        <img src={youssefSayed} alt="youssef sayed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>YOUSSEF SAYED</h1>
                            <h5 className='text-center text-base'>DESKTOP APPLICATION HEAD</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={omar} alt="omar" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>OMAR SAYED</h1>
                            <h5 className='text-center text-base'>DESKTOP APPLICATION VICE</h5>
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

export default Desktop