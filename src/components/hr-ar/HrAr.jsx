import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import mohamedWael from '../../assets/mohamed-wael.webp'
import beshoy from '../../assets/beshoy.webp'
import HeaderAr from '../header-ar/HeaderAr';
import FooterAr from '../footer-ar/FooterAr';
import './style/hr-ar.css'

const HrAr = () => {
  return (
    <main className='hr-ar'>
      <Helmet>
        <title>الموارد البشرية</title>
      </Helmet>
        <HeaderAr/>
        {/* start intro */}
        <section className="intro-ar h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown'>الموارد</h1>
                <h1 className='dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>البشرية</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about-ar h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl'>ما هى الموارد البشرية؟</h1>
            </AnimationOnScroll>
            <p className='text-center'>لجنة الموارد البشرية: يتمثل دورنا في اختيار الأشخاص المناسبين للعمل أولاً <br/> وثانيًا ، توظيف الأشخاص في أماكن مناسبة لهم لإعطائهم الفرصة للإبداع <br/> وتزويد كل قسم باحتياجاته من الأشخاص من أجل تسهيل أداء وظيفتهم على أكمل وجه</p>
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
                        <img src={mohamedWael} alt="mohamed wael" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>محمد وائل</h1>
                            <h5 className='text-center text-base'>قائد الموارد البشرية</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={beshoy} alt="beshoy saad" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>بشوي سعد</h1>
                            <h5 className='text-center text-base'>مساعد لقائد الموارد البشرية</h5>
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

export default HrAr