import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import csharp from '../../assets/Csharp.webp'
import sqlServer from '../../assets/sql-server.webp'
import youssefSayed from '../../assets/youssef-sayed.webp'
import omar from '../../assets/omar-sayed.webp'
import assignment1 from '../../documents/01-Assginment.pdf'
import HeaderAr from '../header-ar/HeaderAr';
import FooterAr from '../footer-ar/FooterAr';
import './style/desktop-ar.css'

const DesktopAr = () => {
  return (
    <main className='desktop-ar'>
        <Helmet>
            <title>تطبيقات سطح المكتب</title>
        </Helmet>
        <HeaderAr/>
        {/* start intro */}
        <section className="intro-ar h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown'>تطبيقات</h1>
                <h1 className='dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>سطح المكتب</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about-ar h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl'>ما هو تطبيقات سطح المكتب؟</h1>
            </AnimationOnScroll>
            <p className='text-center'>لجنة تطوير تطبيقات سطح المكتب: يتمثل دورنا في تعلم الطلاب كيفية تطوير تطبيقات سطح المكتب<br/> التي تتفاعل مع نظام التشغيل وتوفر واجهة مستخدم للإدخال والإخراج باستخدام أفضل وأحدث التقنيات</p>
        </section>
        {/* end about */}
        {/* start roadmap */}
        <section className="roadmap-ar">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl'>ما هى خطة الدراسة ؟</h1>
            </AnimationOnScroll>
            <div className="boxs flex flex-wrap justify-center items-center gap-6 p-8">
                <div className="box-2">
                    <img src={sqlServer} alt="sql server" />
                    <p>هو نظام لإدارة قواعد البيانات العلائقية بصفته خادم قاعدة بيانات ، فهو منتج برمجي بوظيفة أساسية لتخزين البيانات واستردادها حسب طلب تطبيقات البرامج الأخرى - والتي قد تعمل إما على نفس الكمبيوتر أو على كمبيوتر آخر عبر الشبكة</p>
                </div>
                <div className="box-1">
                    <img src={csharp} alt="c#" />
                    <p>هي لغة برمجة للأغراض العامة ومتعددة النماذج. تشمل الكتابة الثابتة ، والكتابة القوية ، والنطاق المعجمي ، والإلزامي ، والتوضيحي ، والوظيفي ، والعامة ، والموجهة للكائنات ، والموجهة نحو المكونات</p>
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
                    <a href="https://drive.google.com/drive/folders/1ET5OjbdaeK3SM1Es_wqD83VTYrufdMBf?usp=sharing" target="_blank">
                        <div className="lec-1 flex justify-center items-center">
                            <h1 className='text-center text-5xl'>المحاضرة الأولى</h1>
                        </div>
                    </a>
                    <a href={assignment1} download>
                        <button>التاسك الأول</button>
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
                        <img src={youssefSayed} alt="youssef sayed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>يوسف سيد</h1>
                            <h5 className='text-center text-base'>قائد تطبيق سطح المكتب</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={omar} alt="omar sayed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>عمر سيد</h1>
                            <h5 className='text-center text-base'>مساعد قائد تطبيق سطح المكتب</h5>
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

export default DesktopAr