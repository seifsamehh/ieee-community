import React from 'react'
import { Helmet } from 'react-helmet-async';
import { BubblyLink } from "react-bubbly-transitions";
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './style/categories.css'

const categories = () => {
  return (
    <>
    <Helmet>
        <title>Tracks</title>
    </Helmet>
    <Header/>
    <section className="tracks-page py-8 overflow-x-hidden">
        <df-messenger
            intent="WELCOME"
            chat-title="IEEE"
            agent-id="21e2782f-1c45-4941-9aad-514097ef2125"
            language-code="en"
            chat-icon="https://i.ibb.co/1zy75VY/bot.png"
        ></df-messenger>
        {/* start tech */}
        <div className="tech">
            <h1 className='text-6xl ml-8 my-8 font-thin text-center animate__animated animate__backInLeft animate__delay-1s'>TECHNICAL</h1>
            <div className="categories flex justify-center flex-wrap gap-8">
                <BubblyLink to="/Ml" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>MACHINE LEARNING</h2>
                        </div>
                    </div>
                </BubblyLink>
                <BubblyLink to="/UI-UX" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>UI / UX</h2>
                        </div>
                    </div>
                </BubblyLink>
                <BubblyLink to="/desktop" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>DESKTOP APPLICATION</h2>
                        </div>
                    </div>
                </BubblyLink>
                <BubblyLink to="/web" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>WEB DEVELOPMENT</h2>
                        </div>
                    </div>
                </BubblyLink>
                <BubblyLink to="/Embded" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>EMBEDDED SYSTEM</h2>
                        </div>
                    </div>
                </BubblyLink>
                <BubblyLink to="/Graphic" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>GRAPHIC DESIGN</h2>
                        </div>
                    </div>
                </BubblyLink>
            </div>
        </div>
        {/* end tech */}
        {/* start non tech */}
        <div className="non-tech">
            <h1 className='text-6xl ml-8 my-8 font-thin text-center animate__animated animate__backInRight animate__delay-1s'>NON TECHNICAL</h1>
            <div className="categories flex justify-center flex-wrap gap-8">
                <BubblyLink to="/hr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>HR</h2>
                        </div>
                    </div>
                </BubblyLink>
                <BubblyLink to="/pr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>PR</h2>
                        </div>
                    </div>
                </BubblyLink>
                <BubblyLink to="/media" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    <div className="box">
                        <span></span>
                        <div className="content">
                            <h2>MEDIA</h2>
                        </div>
                    </div>
                </BubblyLink>
            </div>
        </div>
        {/* end non tech */}
    </section>
    <Footer/>
    </>
  )
}

export default categories