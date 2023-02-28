import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import c from '../../assets/c-programming.webp'
import ansimon from '../../assets/embded-head.webp'
import ahmedIbrahim from '../../assets/embded-vice.webp'
import HeaderAr from '../header-ar/HeaderAr';
import FooterAr from '../footer-ar/FooterAr';
import './style/embded-ar.css'

const EmbdedAr = () => {
  return (
    <main className="embded-ar">
        <Helmet>
            <title>نظام مضمن</title>
        </Helmet>
        <HeaderAr/>
        {/* start intro */}
        <section className="intro-ar h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown'>نظام</h1>
                <h1 className='dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>مضمن</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about-ar h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl'>ما هو النظام المضمن ؟</h1>
            </AnimationOnScroll>
            <p className='text-center'>تعكس الكلمة المضمنة حقيقة أن هذه الأنظمة عادة ما تكون جزءًا لا يتجزأ من نظام أكبر ، يُعرف باسم نظام التضمين<br/> يمكن أن تتعايش أنظمة مضمنة متعددة في نظام التضمين. الأنظمة المضمنة هي أنظمة خاصة بالتطبيقات تحتوي على أجهزة وبرامج مصممة خصيصًا<br/> لمهمة معينة وتشكل عمومًا جزءًا من نظام أكبر. تاريخيًا ، تم استخدام مصطلح الأنظمة المدمجة لوصف أي نظام<br/> غير متعلق بالكمبيوتر الشخصي ، ولكن بمرور الوقت ، نما التعريف ليشمل أي نظام مخصص لوظيفة معينة</p>
        </section>
        {/* end about */}
        {/* start roadmap */}
        <section className="roadmap-ar">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl'>ما هى خطة الدراسة ؟</h1>
            </AnimationOnScroll>
            <div className="boxs flex flex-wrap justify-center items-center gap-6 p-8">
                <div className="box-1">
                    <h1 className='text-5xl text-center font-thin'>مقدمة عن النظام المضمن</h1>
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
                    <h1 className='text-5xl text-center font-thin'>توصيل متحكم دقيق</h1>
                    <ul>
                        <li>-INTRODUCTION TO AVR.</li>
                        <li>-I/O PORTS.</li>
                        <li>-TIMERS.</li>
                        <li>-WATCH DOG TIMER.</li>
                    </ul>
                </div>
                <div className="box-4">
                    <h1 className='text-5xl text-center font-thin'>لغة السى للتطبيقات المدمجة</h1>
                    <ul>
                        <li>-EXERCISES.</li>
                    </ul>
                </div>
                <div className="box-5">
                    <h1 className='text-5xl text-center font-thin'>توصيل متحكم دقيق</h1>
                    <ul>
                        <li>-LCD.</li>
                        <li>-KEYPAD.</li>
                    </ul>
                </div>
                <div className="box-6">
                    <h1 className='text-5xl text-center font-thin'>هندسة البرمجيات</h1>
                </div>
            </div>
        </section>
        {/* end roadmap */}
        {/* start lectures */}
        <section className="lectures-ar py-16 overflow-x-hidden">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl mb-12'>المحاضرات</h1>
            </AnimationOnScroll>
            <div className="lec-boxs flex justify-evenly flex-wrap gap-12">
                <div className="box-1 flex flex-col justify-center items-center gap-8">
                    <a href="https://drive.google.com/file/d/1AzDEQZOydHPxGWq0gI1HC6u4tZUoZlnX/view?usp=share_link" target="_blank">
                        <div className="lec-1 flex justify-center items-center">
                            <h1 className='text-center text-5xl'>المحاضرة الأولى</h1>
                        </div>
                    </a>
                </div>
                <div className="box-2 flex flex-col justify-center items-center gap-8">
                    <a href="https://drive.google.com/drive/folders/1xSB9w6vdRly9R_FPDiGUdAQjcQGACY0H" target="_blank">
                        <div className="lec-2 flex justify-center items-center">
                            <h1 className='text-center text-5xl'>المحاضرة الثانية</h1>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        {/* end lectures */}
        {/* start team */}
        <section className="team-ar py-16 overflow-x-hidden">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl mb-12'>الفريق</h1>
            </AnimationOnScroll>
            <div className="cards flex justify-center flex-wrap gap-16">
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ansimon} alt="ansimon" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>انسيمون</h1>
                            <h5 className='text-center text-base'>قائدة النظام المضمن</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ahmedIbrahim} alt="ahmed ibrahim" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>أحمد ابراهيم</h1>
                            <h5 className='text-center text-base'>مساعد قائدة النظام المضمن</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end team */}
        <FooterAr/>
    </main>
  )
}

export default EmbdedAr