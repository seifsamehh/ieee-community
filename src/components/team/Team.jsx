import React from 'react'
import { Helmet } from 'react-helmet-async';
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
import mohamedWael from '../../assets/mohamed-wael.webp'
import mira from '../../assets/mira.webp'
import ansimon from '../../assets/embded-head.webp'
import ahmedIbrahim from '../../assets/embded-vice.webp'
import soliman from '../../assets/soliman.webp'
import eyad from '../../assets/eyad.webp'
import beshoy from '../../assets/beshoy.webp'
import doha from '../../assets/doha.webp'
import ahmedHamdy from '../../assets/ahmed-hamdy.webp'
import boss from '../../assets/amed.webp'
import ibrahim from '../../assets/ibrahim.webp'
import public1 from '../../assets/public.webp'
import public2 from '../../assets/public-2.webp'
import waled from '../../assets/waled.webp'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './style/team.css'

const Team = () => {
  return (
    <>
        <Helmet>
            <title>Team</title>
        </Helmet>
        <Header/>
        <section className="team-page py-16 overflow-x-hidden">
            <df-messenger
                intent="WELCOME"
                chat-title="IEEE"
                agent-id="21e2782f-1c45-4941-9aad-514097ef2125"
                language-code="en"
                chat-icon="https://i.ibb.co/1zy75VY/bot.png"
            ></df-messenger>
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
        <Footer/>
    </>
  )
}

export default Team