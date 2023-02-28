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
import public1 from '../../assets/public.webp'
import public2 from '../../assets/public-2.webp'
import waled from '../../assets/waled.webp'
import FooterAr from '../footer-ar/FooterAr';
import HeaderAr from '../header-ar/HeaderAr';
import './style/team-ar.css'

const TeamAr = () => {
  return (
    <>
        <Helmet>
            <title>الفريق</title>
        </Helmet>
        <HeaderAr/>
        <section className="team-page-ar py-16 overflow-x-hidden">
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
                            <h1 className='font-extrabold text-xl text-center'>دكتور سعد السيد</h1>
                            <h5 className='text-center text-base'>مشرف معهد العبور العالى للهندسة</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={public2} alt="magdy" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>الأستاذ الدكتور مجدي زاهو</h1>
                            <h5 className='text-center text-base'>عميد معهد العبور العالى للهندسة</h5>
                        </div>
                    </div>
                </div>
                <div className="card special">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={waled} alt="waled" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>دكتور وليد الدهشان</h1>
                            <h5 className='text-center text-base'>مشرف معهد العبور العالى</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={boss} alt="mohamed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>الأستاذ الدكتور محمد سيد</h1>
                            <h5 className='text-center text-base'>عميد المعهد العالى للادارة و المعلومات</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ibrahim} alt="ibrahim" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>دكتور ابراهيم عبد اللطيف</h1>
                            <h5 className='text-center text-base'>مشرف معهد العبور العالى للادارة و المعلومات</h5>
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
                            <h1 className='font-extrabold text-xl text-center'>أحمد مرسى</h1>
                            <h5 className='text-center text-base'>ناصح</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={mohamedAshraf} alt="mohamed ashraf" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>محمد أشرف</h1>
                            <h5 className='text-center text-base'>مؤسس</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={youssefAli} alt="youssef ali" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>يوسف على</h1>
                            <h5 className='text-center text-base'>نائب</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={aymanAli} alt="ayman ali" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>ايمن على</h1>
                            <h5 className='text-center text-base'>نائب</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={attar} alt="mustafa al-attar" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>مصطفى العطار</h1>
                            <h5 className='text-center text-base'>امين صندوق</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={amar} alt="mohamed amer" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>محمد عامر</h1>
                            <h5 className='text-center text-base'>سكرتير</h5>
                        </div>
                    </div>
                </div>
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
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={seif} alt="seif sameh" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>سيف سامح</h1>
                            <h5 className='text-center text-base'>قائد تطوير الويب</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ahmedMohamed} alt="ahmed mohamed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>أحمد محمد</h1>
                            <h5 className='text-center text-base'>مساعد قائد تطوير الويب</h5>
                        </div>
                    </div>
                </div>
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
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={soliman} alt="soliman el-sayed" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>سليمان السيد</h1>
                            <h5 className='text-center text-base'>قائد وسائل الاعلام</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner flex flex-col justify-center items-center gap-6">
                        <img src={ahmedHamdy} alt="ahmed hamdy" loading='lazy' />
                        <div className="heading">
                            <h1 className='font-extrabold text-xl text-center'>أحمد حمدى</h1>
                            <h5 className='text-center text-base'>مساعد قائد وسائل الاعلام</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterAr/>
    </>
  )
}

export default TeamAr