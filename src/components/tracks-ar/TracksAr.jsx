import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BubblyLink } from "react-bubbly-transitions";
import HeaderAr from '../header-ar/HeaderAr';
import './style/tracks-ar.css'
import FooterAr from '../footer-ar/FooterAr';

const TracksAr = () => {
  return (
    <>
        <Helmet>
            <title>مسارتنا</title>
        </Helmet>
        <HeaderAr/>
        <section className="tracks-page-ar py-8 overflow-x-hidden">
            <df-messenger
                intent="WELCOME"
                chat-title="IEEE"
                agent-id="21e2782f-1c45-4941-9aad-514097ef2125"
                language-code="en"
                chat-icon="https://i.ibb.co/1zy75VY/bot.png"
            ></df-messenger>
            {/* start tech */}
            <div className="tech">
                <h1 className='text-6xl ml-8 my-8 font-thin flex justify-center mr-12 animate__animated animate__backInLeft animate__delay-1s'>تقنى</h1>
                <div className="categories flex justify-center flex-wrap gap-8">
                    <BubblyLink to="/GraphicAr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>تصميم الجرافيك</h2>
                            </div>
                        </div>
                    </BubblyLink>
                    <BubblyLink to="/EmbdedAr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2> نظام مضمن</h2>
                            </div>
                        </div>
                    </BubblyLink>
                    <BubblyLink to="/webAr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>تطوير الويب</h2>
                            </div>
                        </div>
                    </BubblyLink>
                    <BubblyLink to="/desktopAr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>تطبيقات سطح المكتب</h2>
                            </div>
                        </div>
                    </BubblyLink>
                    <BubblyLink to="/UI-UX-Ar" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>الواجهة الامامية و تجربة المستخدم</h2>
                            </div>
                        </div>
                    </BubblyLink>
                    <BubblyLink to="/Ml-Ar" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>التعلم الالي</h2>
                            </div>
                        </div>
                    </BubblyLink>
                </div>
            </div>
            {/* end tech */}
            {/* start non tech */}
            <div className="non-tech">
                <h1 className='text-6xl ml-8 my-8 font-thin flex justify-center mr-12 animate__animated animate__backInRight animate__delay-1s'>غير تقنى</h1>
                <div className="categories flex justify-center flex-wrap gap-8">
                    <BubblyLink to="/mediaAr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>وسائل الاعلام</h2>
                            </div>
                        </div>
                    </BubblyLink>
                    <BubblyLink to="/prAr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>العلاقات العامة</h2>
                            </div>
                        </div>
                    </BubblyLink>
                    <BubblyLink to="/hrAr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>الموارد البشرية</h2>
                            </div>
                        </div>
                    </BubblyLink>
                </div>
            </div>
            {/* end non tech */}
        </section>
        <FooterAr/>
    </>
  )
}

export default TracksAr