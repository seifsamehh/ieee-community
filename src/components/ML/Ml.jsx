import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import Header from '../header/Header'
import python from '../../assets/python.webp'
import sql from '../../assets/sql.webp'
import mohamedReda from '../../assets/mohamed-reda.webp'
import eyad from '../../assets/eyad.webp'
import Footer from '../footer/Footer';
import './style/ml.css'

const Ml = () => {
  return (
    <main className="ml">
        <Helmet>
            <title>Machine Learning</title>
        </Helmet>
        <Header/>
        {/* start intro */}
        <section className="intro h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown'>MACHINE</h1>
                <h1 className='dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>LEARNING</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl'>WHAT IS MACHINE LEARNING ?</h1>
            </AnimationOnScroll>
            <p className='text-center'>We are Machine Learning community which aims to provide the student with the tools and algorithms<br/> he needs in machine learning in order to be able to solve real problems and also provide them<br/> with the skill of mathematics and data analysis which plays a huge role in the machine Learning industry<br/> we also aims to create AI based applications in fields like NLP and computer vision.</p>
        </section>
        {/* end about */}
        {/* start roadmap */}
        <section className="roadmap">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl'>What Is Our Roadmap ?</h1>
            </AnimationOnScroll>
            <div className="boxs flex flex-wrap justify-center items-center gap-6 p-8">
                <div className="box-1">
                    <img src={python} alt="python" />
                    <p>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.</p>
                </div>
                <div className="box-2">
                    <h1 className='text-5xl text-center font-thin'>Statistics and probability</h1>
                    <p>Probability And Statistics are the two important concepts in Maths. Probability is all about chance. Whereas statistics is more about how we handle various data using different techniques. It helps to represent complicated data in a very easy and understandable way.</p>
                </div>
                <div className="box-3">
                    <img src={sql} alt="sql" />
                    <p>In computing, a database is an organized collection of data stored and accessed electronically. Small databases can be stored on a file system, while large databases are hosted on computer clusters or cloud storage.</p>
                </div>
                <div className="box-4">
                    <h1 className='text-5xl text-center font-thin'>Data Manipulation tools</h1>
                    <ul>
                        <li>- Numpy</li>
                        <li>- Pandas</li>
                        <li>- Matplotlib</li>
                        <li>- Seaborn</li>
                    </ul>
                </div>
                <div className="box-5">
                    <h1 className='text-5xl text-center font-thin'>Machine Learning</h1>
                    <p>Machine learning is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks. It is seen as a part of artificial intelligence.</p>
                </div>
                <div className="box-6">
                    <h1 className='text-5xl text-center font-thin'>Deep Learning</h1>
                    <p>Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.</p>
                </div>
            </div>
        </section>
        {/* end roadmap */}
        {/* start team */}
        <section className="team py-16 overflow-x-hidden">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl mb-12'>TEAM</h1>
            </AnimationOnScroll>
            <div className="cards flex justify-center flex-wrap gap-16">
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={mohamedReda} alt="mohamed reda" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>MOHAMED REDA</h1>
                            <h5 className='text-center text-base'>ML HEAD</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={eyad} alt="eyad ayman" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>EYAD AYMAN</h1>
                            <h5 className='text-center text-base'>ML VICE</h5>
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

export default Ml