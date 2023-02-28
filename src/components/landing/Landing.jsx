import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Helmet } from 'react-helmet-async';
import { BubblyLink } from "react-bubbly-transitions";
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ahmedMorsy from '../../assets/ahmed-morsy.webp'
import mohamedAshraf from '../../assets/mohamed-ashraf.webp'
import youssefAli from '../../assets/youssef-ali.webp'
import aymanAli from '../../assets/ayman.webp'
import attar from '../../assets/attar.webp'
import amar from '../../assets/amar.webp'
import mohamedReda from '../../assets/mohamed-reda.webp'
import kirolos from '../../assets/kirolos.webp'
import eslam from '../../assets/eslam.webp'
import youssefSayed from '../../assets/youssef-sayed.webp'
import omar from '../../assets/omar-sayed.webp'
import seif from '../../assets/seif.webp'
import ahmedMohamed from '../../assets/ahmedMohamed.webp'
import ansimon from '../../assets/embded-head.webp'
import ahmedIbrahim from '../../assets/embded-vice.webp'
import mohamedWael from '../../assets/mohamed-wael.webp'
import mira from '../../assets/mira.webp'
import soliman from '../../assets/soliman.webp'
import eyad from '../../assets/eyad.webp'
import beshoy from '../../assets/beshoy.webp'
import doha from '../../assets/doha.webp'
import ahmedHamdy from '../../assets/ahmed-hamdy.webp'
import boss from '../../assets/amed.webp'
import ibrahim from '../../assets/ibrahim.webp'
import atec from '../../assets/atec.webp'
import public1 from '../../assets/public.webp'
import public2 from '../../assets/public-2.webp'
import waled from '../../assets/waled.webp'
import cpc from '../../assets/cpc.webp'
import './style/landing.css'

const Landing = () => {
  return (
    <main className='landing'>
        <Helmet>
            <title>IEEE</title>
        </Helmet>
        <Header/>
        {/* start intro */}
        <section className="intro h-screen flex justify-center items-center overflow-x-hidden">
            <div className="ripple-background">
                <div className="circle xxlarge shade1"></div>
                <div className="circle xlarge shade2"></div>
                <div className="circle large shade3"></div>
                <div className="circle mediun shade4"></div>
                <div className="circle small shade5"></div>
            </div>
            <div className="heading-box">
                <h1 className='ieee text-center text-9xl font-thin animate__animated animate__backInDown'>IEEE</h1>
                <h1 className='obour text-center text-9xl animate__animated animate__backInUp animate__delay-1s'>OBOUR <br/> BRANCH</h1>
            </div>
        </section>
        {/* end intro */}
        {/* start about */}
        <section className="about h-screen flex justify-center items-center flex-col gap-12 overflow-hidden">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl mb-4'>WHAT IS IEEE ?</h1>
            </AnimationOnScroll>
            <p className='text-center'>IEEE OSB founded in 2022 by group of computer science students, the branch helping and serving students<br/> And this will be done through events, workshops, sessions and educational activities IEEE consists of 2 major branches; Organizing and Technical.</p>
            <p className='text-center mt-6'>We are IEEE Obour Student Branch, Our location is at Faculty of Computer Science Obour University.</p>
        </section>
        {/* end about */}
        {/* start tracks */}
        <section className="tracks py-8 overflow-hidden">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl'>OUR TRACKS</h1>
            </AnimationOnScroll>
            {/* start tech */}
            <div className="tech">
                <h1 className='text-6xl ml-8 my-8 font-thin'>TECHNICAL</h1>
                <div className="categories flex justify-center flex-wrap gap-8">
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutLeft">
                        <BubblyLink to="/Ml" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <h2>MACHINE LEARNING</h2>
                                </div>
                            </div>
                        </BubblyLink>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" delay={500}>
                        <BubblyLink to="/UI-UX" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <h2>UI / UX</h2>
                                </div>
                            </div>
                        </BubblyLink>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" delay={600}>
                        <BubblyLink to="/desktop" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <h2>DESKTOP APPLICATION</h2>
                                </div>
                            </div>
                        </BubblyLink>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" delay={700}>
                        <BubblyLink to="/web" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <h2>WEB DEVELOPMENT</h2>
                                </div>
                            </div>
                        </BubblyLink>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutRight" delay={800}>
                        <BubblyLink to="/Embded" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <h2>EMBEDDED SYSTEM</h2>
                                </div>
                            </div>
                        </BubblyLink>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutRight" delay={900}>
                        <BubblyLink to="/Graphic" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <h2>GRAPHIC DESIGN</h2>
                                </div>
                            </div>
                        </BubblyLink>
                    </AnimationOnScroll>
                </div>
            </div>
            {/* end tech */}
            {/* start non tech */}
            <div className="non-tech">
                <h1 className='text-6xl ml-8 my-8 font-thin'>NON TECHNICAL</h1>
                <div className="categories flex justify-center flex-wrap gap-8">
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp">
                        <BubblyLink to="/hr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <h2>HR</h2>
                                </div>
                            </div>
                        </BubblyLink>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" delay={500}>
                        <BubblyLink to="/pr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <h2>PR</h2>
                                </div>
                            </div>
                        </BubblyLink>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" delay={600}>
                        <BubblyLink to="/media" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                            <div className="box">
                                <span></span>
                                <div className="content">
                                    <h2>MEDIA</h2>
                                </div>
                            </div>
                        </BubblyLink>
                    </AnimationOnScroll>
                </div>
            </div>
            {/* end non tech */}
        </section>
        {/* end tracks */}
        {/* start faq */}
        <df-messenger
            intent="WELCOME"
            chat-title="IEEE"
            agent-id="21e2782f-1c45-4941-9aad-514097ef2125"
            language-code="en"
            chat-icon="https://i.ibb.co/1zy75VY/bot.png"
        ></df-messenger>
        {/* end faq */}
        {/* start team */}
        <section className="team py-16 overflow-x-hidden">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl mb-12'>TEAM</h1>
            </AnimationOnScroll>
            <div className="important flex justify-center items-end flex-wrap gap-16 mb-20">
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={public1} alt="saad" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>DR. SAAD EL-SAYED</h1>
                            <h5 className='text-center text-base'>ENGINEERING SUPERVISOR</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={public2} alt="magdy" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>PROF.DR. MAGDY ZAHW</h1>
                            <h5 className='text-center text-base'>OBOUR HIGH INSTITUTE FOR ENGINEERING</h5>
                        </div>
                    </div>
                </div>
                <div className="card special">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={waled} alt="waled" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>DR. WALID EL-DAHSHAN</h1>
                            <h5 className='text-center text-base'>OBOUR HIGH INSTITUTES SUPERVISOR</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={boss} alt="mohamed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>PROF.DR. MOHAMED SAYED</h1>
                            <h5 className='text-center text-base'>OBOUR HIGH INSTITUTE FOR MANAGMENT AND INFORMATICS</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ibrahim} alt="ibrahim" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>DR. IBRAHIM ABDELLATIF</h1>
                            <h5 className='text-center text-base'>COMPUTER SCIENCE SUPERVISOR</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards flex justify-center flex-wrap gap-16">
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ahmedMorsy} alt="ahmed morsy" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>AHMED MORSY</h1>
                            <h5 className='text-center text-base'>ADVISOR</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={mohamedAshraf} alt="mohamed ashraf" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>MOHAMED ASHRAF</h1>
                            <h5 className='text-center text-base'>CHAIRMAN</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={youssefAli} alt="youssef ali" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>YOUSSEF ALI</h1>
                            <h5 className='text-center text-base'>VICE</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={aymanAli} alt="ayman ali" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>AYMAN ALI</h1>
                            <h5 className='text-center text-base'>VICE</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={attar} alt="mustafa attar" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>MUSTAFA AL-ATTAR</h1>
                            <h5 className='text-center text-base'>TREASURER</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={amar} alt="mohamed amer" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>MOHAMED AMER</h1>
                            <h5 className='text-center text-base'>SECRETARY</h5>
                        </div>
                    </div>
                </div>
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
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={kirolos} alt="kirolos adel" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>KIROLOS ADEL</h1>
                            <h5 className='text-center text-base'>UI/UX HEAD</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={eslam} alt="eslam mohamed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>ESLAM MOHAMED</h1>
                            <h5 className='text-center text-base'>UI/UX VICE</h5>
                        </div>
                    </div>
                </div>
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
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={seif} alt="seif sameh" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>SAIF SAMEH</h1>
                            <h5 className='text-center text-base'>WEB HEAD</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ahmedMohamed} alt="ahmed mohamed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>AHMED MOHAMED</h1>
                            <h5 className='text-center text-base'>WEB VICE</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ansimon} alt="ansimon" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>ANSIMON</h1>
                            <h5 className='text-center text-base'>EMBEDDED SYSTEM HEAD</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ahmedIbrahim} alt="ahmed ibrahim" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>AHMED IBRAHIM</h1>
                            <h5 className='text-center text-base'>EMBEDDED SYSTEM VICE</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={mohamedWael} alt="mohamed wael" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>MOHAMED WAEL</h1>
                            <h5 className='text-center text-base'>HR HEAD</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={beshoy} alt="beshoy saad" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>BESHOY SAAD</h1>
                            <h5 className='text-center text-base'>HR VICE</h5>
                        </div>
                    </div>
                </div>
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
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={soliman} alt="soliman al-sayed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>SOLIMAN AL-SAYED</h1>
                            <h5 className='text-center text-base'>MEDIA HEAD</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ahmedHamdy} alt="ahmed hamdy" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>AHMED HAMDY</h1>
                            <h5 className='text-center text-base'>MEDIA VICE</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end team */}
        {/* start partnership */}
        <section className="partnership py-16 overflow-x-hidden">
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                <h1 className='text-center text-7xl mb-12 partnership-heading'>PARTNERSHIP WITH</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
                <div className="partnership-box flex justify-center items-center">
                    <img src={cpc} alt="cpc logo" />
                </div>
            </AnimationOnScroll>
        </section>
        {/* end partnership */}
        {/* start atec */}
        <section className="atec py-16 overflow-x-hidden">
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutLeft">
                <h1 className='text-center text-7xl mb-12 sponser'>SPONSER</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
                <div className="atec-box flex justify-center items-center flex-col">
                    <img src={atec} alt="atec" loading='lazy' />
                    <p className='text-center my-12'>Our main objective is promoting the highest standards in training and development programs<br/> to facilitate and help in the educational, learning and practical dimensions for both students and the external community.</p>
                    <p className='text-center'>" We would like to thank ATEC Center for its continuous support, materially and morally. "</p>
                </div>
            </AnimationOnScroll>
        </section>
        {/* end atec */}
        <Footer/>
    </main>
  )
}

export default Landing