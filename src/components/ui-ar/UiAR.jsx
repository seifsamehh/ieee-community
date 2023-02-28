import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import kirolos from '../../assets/kirolos.webp'
import eslam from '../../assets/eslam.webp'
import resource1 from '../../documents/UI UX Session 1.pdf'
import resource2 from '../../documents/UI UX Session 2.pdf'
import resource3 from '../../documents/UI UX Session 3.pdf'
import HeaderAr from '../header-ar/HeaderAr';
import FooterAr from '../footer-ar/FooterAr';
import './style/ui-ar.css'

const UiAR = () => {
  return (
    <main className='ui-ar'>
        <Helmet>
            <title>الواجهة الامامية و تجربة المستخم</title>
        </Helmet>
        <HeaderAr/>
        {/* start intro */}
        <section className="intro-ar h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown'>الواجهة الأمامية</h1>
                <h1 className='dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>تجربة المستخدم</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about-ar h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl'>ما هو الواجهة الأمامية و تجربة المستخدم؟</h1>
            </AnimationOnScroll>
            <p className='text-center'>تتضمن مصمم الواجهات الأمامية و تجربة المستخدم جمع متطلبات المستخدم<br/> و تصميم العناصر الرسومية وبناء مكونات التنقل لتحويل برنامجنا إلى منتجات سهلة الاستخدام لعملائنا</p>
        </section>
        {/* end about */}
        {/* start lectures */}
        <section className="lectures-ar py-16 overflow-x-hidden">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl mb-12'>المحاضرات</h1>
            </AnimationOnScroll>
            <div className="lec-boxs flex justify-center items-start flex-wrap gap-12">
                <div className="box-1 flex flex-col justify-center items-center gap-8">
                    <a href="https://drive.google.com/file/d/1ecQlEYBlVUrRUWazVQn3jMaNjaoiw8ka/view?usp=share_link" target="_blank">
                        <div className="lec-1 flex justify-center items-center">
                            <h1 className='text-center text-5xl'>المحاضرة الأولى</h1>
                        </div>
                    </a>
                    <a href={resource1} download>
                        <button>مرجع المحاضرة</button>
                    </a>
                </div>
                <div className="box-2 flex flex-col justify-center items-center gap-8">
                    <a href="https://drive.google.com/file/d/1Br_Wt6D2JMIUd34VUL3J1ye02VhiYF8j/view?usp=share_link" target="_blank">
                        <div className="lec-2 flex justify-center items-center">
                            <h1 className='text-center text-5xl'>المحاضرة الثانية</h1>
                        </div>
                    </a>
                    <a href={resource2} download>
                        <button>مرجع المحاضرة</button>
                    </a>
                </div>
                <div className="box-3 flex flex-col justify-center items-center gap-8">
                    <a href="https://drive.google.com/file/d/14B9li226DRGLjaCZmiWOwzBm_8MSjEM0/view?usp=sharing" target="_blank">
                        <div className="lec-3 flex justify-center items-center">
                            <h1 className='text-center text-5xl'>المحاضرة الثالثة</h1>
                        </div>
                    </a>
                    <a href={resource3} download>
                        <button>مرجع المحاضرة</button>
                    </a>
                </div>
                <div className="box-4 flex flex-col justify-center items-center gap-8">
                    <a href="https://drive.google.com/file/d/1XUzm5i0SJceqZTNUtya3yMkBFkqb0Mzm/view?usp=sharing" target="_blank">
                        <div className="lec-4 flex justify-center items-center">
                            <h1 className='text-center text-5xl'>المحاضرة الرابعة</h1>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        {/* end lectures */}
        {/* start team */}
        <section className="team-ar py-16 overflow-x-hidden">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl mb-12'>الفريق</h1>
            </AnimationOnScroll>
            <div className="cards flex justify-center flex-wrap gap-16">
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={kirolos} alt="kirolos adel" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>كيرلس عادل</h1>
                            <h5 className='text-center text-base'>قائد الواجهات الامامية و تجربة المستخدم</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={eslam} alt="eslam mohamed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>اسلام محمد</h1>
                            <h5 className='text-center text-base'>مساعد قائد الواجهات الأمامية و تجربة المستخدم</h5>
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

export default UiAR