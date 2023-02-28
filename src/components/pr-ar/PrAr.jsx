import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import mira from '../../assets/mira.webp'
import doha from '../../assets/doha.webp'
import HeaderAr from '../header-ar/HeaderAr';
import FooterAr from '../footer-ar/FooterAr';
import './style/pr-ar.css'

const PrAr = () => {
  return (
    <main className='pr-ar'>
      <Helmet>
        <title>العلاقات العامة</title>
      </Helmet>
        <HeaderAr/>
        {/* start intro */}
        <section className="intro-ar h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown'>العلاقات</h1>
                <h1 className='dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>العامة</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about-ar h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl'>ما هى العلاقات العامة؟</h1>
            </AnimationOnScroll>
            <p className='text-center'>من مسؤوليتنا الحفاظ على صورتنا بالطريقة التي تلبي رؤيتنا ورسالتنا ، وإرسال رسائل البريد الإلكتروني<br/> اللازمة لدعوة طلاب العبور لحضور الفعالياتلعقد صفقات مع الرعاة وإقامة شراكات مع المجتمعات الأخرى</p>
        </section>
        {/* end about */}
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
                        <img src={mira} alt="mira makram" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>ميرا مكرم</h1>
                            <h5 className='text-center text-base'>قائدة العلاقات العامة</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={doha} alt="doha emam" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>دوحة امام</h1>
                            <h5 className='text-center text-base'>مساعدة لقائدة العلاقات العامة</h5>
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

export default PrAr