import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import HeaderAr from '../header-ar/HeaderAr';
import FooterAr from '../footer-ar/FooterAr';
import python from '../../assets/python.webp'
import sql from '../../assets/sql.webp'
import mohamedReda from '../../assets/mohamed-reda.webp'
import eyad from '../../assets/eyad.webp'
import './style/ml-ar.css'

const MlAR = () => {
  return (
    <main className='ml-ar'>
        <Helmet>
            <title>التعلم الالى</title>
        </Helmet>
        <HeaderAr/>
        {/* start intro */}
        <section className="intro-ar h-screen flex justify-center items-center overflow-hidden">
            <div className="heading-box">
                <h1 className='web text-center text-9xl font-thin animate__animated animate__backInDown'>التعلم</h1>
                <h1 className='dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>الالى</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about-ar h-screen flex justify-center items-center flex-col gap-12">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl'>ما هو التعلم الالى؟</h1>
            </AnimationOnScroll>
            <p className='text-center'>نحن مجتمع التعلم الآلي الذي يهدف إلى تزويد الطالب بالأدوات والخوارزميات التي يحتاجها في التعلم الآلي<br/> حتى يتمكن من حل المشكلات الحقيقية وتزويدهم أيضًا بمهارة الرياضيات وتحليل البيانات التي تلعب دورًا كبيرًا<br/> في الآلة صناعة التعلم نهدف أيضًا إلى إنشاء تطبيقات قائمة على الذكاء الاصطناعي في مجالات مثل البرمجة اللغوية العصبية ورؤية الكمبيوتر</p>
        </section>
        {/* end about */}
        {/* start roadmap */}
        <section className="roadmap-ar">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl'>ما هى خطة الدراسة؟</h1>
            </AnimationOnScroll>
            <div className="boxs flex flex-wrap justify-center items-center gap-6 p-8">
                <div className="box-1">
                    <img src={python} alt="python" />
                    <p>بايثون هي لغة برمجة عالية المستوى للأغراض العامة. تؤكد فلسفة التصميم الخاصة بها على قابلية قراءة الكود باستخدام مسافة بادئة كبيرة. يتم كتابة لغة بايثون ديناميكيًا وجمع البيانات المهملة. وهو يدعم نماذج برمجة متعددة ، بما في ذلك البرمجة المهيكلة والموجهة للكائنات والوظيفية</p>
                </div>
                <div className="box-2">
                    <h1 className='text-5xl text-center font-thin'>الإحصاء والاحتمالات</h1>
                    <p>الاحتمالية والإحصاء هما المفهومان المهمان في الرياضيات. الاحتمالية هي كل شيء عن الصدفة. بينما تدور الإحصائيات حول كيفية تعاملنا مع البيانات المختلفة باستخدام تقنيات مختلفة. يساعد على تمثيل البيانات المعقدة بطريقة سهلة ومفهومة للغاية</p>
                </div>
                <div className="box-3">
                    <img src={sql} alt="sql" />
                    <p>في الحوسبة ، قاعدة البيانات هي مجموعة منظمة من البيانات المخزنة والوصول إليها إلكترونيًا. يمكن تخزين قواعد البيانات الصغيرة على نظام ملفات ، بينما يتم استضافة قواعد البيانات الكبيرة على مجموعات الكمبيوتر أو التخزين السحابي</p>
                </div>
                <div className="box-4">
                    <h1 className='text-5xl text-center font-thin'>أدوات معالجة البيانات</h1>
                    <ul>
                        <li>- Numpy</li>
                        <li>- Pandas</li>
                        <li>- Matplotlib</li>
                        <li>- Seaborn</li>
                    </ul>
                </div>
                <div className="box-5">
                    <h1 className='text-5xl text-center font-thin'>التعلم الالي</h1>
                    <p>التعلم الآلي هو مجال استفسار مكرس لفهم وبناء الأساليب التي "تتعلم" ، أي الأساليب التي تستفيد من البيانات لتحسين الأداء في بعض مجموعة المهام. يُنظر إليه على أنه جزء من الذكاء الاصطناعي</p>
                </div>
                <div className="box-6">
                    <h1 className='text-5xl text-center font-thin'>تعلم عميق</h1>
                    <p>التعلم العميق هو جزء من مجموعة أوسع من أساليب التعلم الآلي القائمة على الشبكات العصبية الاصطناعية مع التعلم التمثيلي. يمكن أن يكون التعلم تحت إشراف أو شبه خاضع للإشراف أو بدون إشراف</p>
                </div>
            </div>
        </section>
        {/* end roadmap */}
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
                        <img src={mohamedReda} alt="mohamed reda" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>محمد رضا</h1>
                            <h5 className='text-center text-base'>قائد التعلم الآلي</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={eyad} alt="eyad ayman" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>إياد أيمن</h1>
                            <h5 className='text-center text-base'>مساعد لقائد التعلم الالى</h5>
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

export default MlAR