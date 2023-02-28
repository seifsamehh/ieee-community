import React from "react";
import Confetti from "react-confetti";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Helmet } from "react-helmet-async";
import soliman from "../../assets/soliman.webp";
import ahmedHamdy from "../../assets/ahmed-hamdy.webp";
import design1 from "../../assets/design-1.webp";
import design2 from "../../assets/design-2.webp";
import design3 from "../../assets/design-3.webp";
import design4 from "../../assets/design-4.webp";
import design5 from "../../assets/design-5.webp";
import design6 from "../../assets/design-6.webp";
import design7 from "../../assets/design-7.webp";
import design8 from "../../assets/design-8.webp";
import design9 from "../../assets/design-9.webp";
import design10 from "../../assets/design-10.webp";
import design11 from "../../assets/design-11.webp";
import design12 from "../../assets/design-12.webp";
import design13 from "../../assets/design-13.webp";
import design14 from "../../assets/design-14.webp";
import design15 from "../../assets/design-15.webp";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./style/graphic.css";

const Graphic = () => {
  return (
    <main className="graphic">
      <Helmet>
        <title>Graphic Design</title>
      </Helmet>
      <Header />
      {/* start intro */}
      <section
        className="intro h-screen flex justify-center items-center overflow-hidden"
        id="intro"
      >
        <div className="heading-box">
          <h1 className="web text-center text-9xl font-thin animate__animated animate__backInDown">
            Graphic
          </h1>
          <h1 className="dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s">
            Design
          </h1>
        </div>
      </section>
      {/* end intro */}
      {/* start about */}
      <section className="about h-screen flex justify-center items-center flex-col gap-12">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutRight"
        >
          <h1 className="text-center text-7xl">WHAT IS GRAPHIC DESIGN ?</h1>
        </AnimationOnScroll>
        <p className="text-center">
          Digital And Media Committee. It is our responsibility to control the
          work for Media
          <br /> and its associated public bodies, include Designs And editing
          videos for the chapter.
        </p>
      </section>
      {/* end about */}
      {/* start roadmap */}
      <section className="roadmap overflow-x-hidden">
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutLeft"
        >
          <h1 className="text-center text-7xl">What Is Our Roadmap ?</h1>
        </AnimationOnScroll>
        <div className="boxs flex flex-wrap justify-center items-center gap-6 p-8">
          <div className="box-1">
            <h1 className="text-5xl text-center font-thin">
              LEARN GRAPHIC DESIGN
            </h1>
          </div>
          <div className="box-2">
            <h1 className="text-5xl text-center font-thin">
              LEARN PHOTOSHOP BASICS
            </h1>
          </div>
          <div className="box-3">
            <h1 className="text-5xl text-center font-thin">master photoshop</h1>
          </div>
          <div className="box-4">
            <h1 className="text-5xl text-center font-thin">
              working on full projects
            </h1>
          </div>
          <div className="box-5">
            <h1 className="text-5xl text-center font-thin">
              Build portfolio For your projects
            </h1>
          </div>
          <div className="box-6">
            <h1 className="text-5xl text-center font-thin">
              Websites that help you
            </h1>
          </div>
        </div>
      </section>
      {/* end roadmap */}
      {/* start lectures */}
      <section className="lectures py-16 overflow-x-hidden">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutRight"
        >
          <h1 className="text-center text-7xl mb-12">SESSIONS</h1>
        </AnimationOnScroll>
        <div className="lec-boxs flex justify-center items-start flex-wrap gap-12">
          <div className="box-1 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1oSFy5KyiNIFMceAkPtQEJZfGHOz5dZaP/view?usp=share_link"
              target="_blank"
            >
              <div className="lec-1 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION ONE</h1>
              </div>
            </a>
          </div>
          <div className="box-2 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1KuYiiywCyU6vb4eYQKAiJAvfY8-HWO99/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-2 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION TWO</h1>
              </div>
            </a>
          </div>
          <div className="box-3 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1y6_GPNt9QdlNWwN3PruHPWrygG_o3m3A/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-3 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION THREE</h1>
              </div>
            </a>
          </div>
          <div className="box-4 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1bw1bbQJaKI3Lq6d88j1LC9xlFjsfSPud/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-4 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION FOUR</h1>
              </div>
            </a>
          </div>
          <div className="box-5 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1m3O_fHAnNLnJiq6Upf80_Fytm-HnJ6N-/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-5 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION FIVE</h1>
              </div>
            </a>
          </div>
          <div className="box-6 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1T-May3b80UN2NqJI9z3AEqwsvFuIuoWa/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-6 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION SIX</h1>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* end lectures */}
      {/* start designs */}
      <section className="designs py-16 overflow-x-hidden">
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutLeft"
        >
          <h1 className="text-center text-7xl mb-12">BEST DESIGNS</h1>
        </AnimationOnScroll>
        <div className="first-cateogry">
          <h1 className="text-7xl font-thin ml-4 mb-8">PRODUCTS</h1>
          <div className="gallery flex justify-center items-center gap-6 flex-wrap">
            <img src={design1} alt="design 1" />
            <img src={design2} alt="design 2" />
            <img src={design3} alt="design 3" />
            <img src={design9} alt="design 9" />
            <img src={design10} alt="design 10" />
            <img src={design12} alt="design 12" />
            <img src={design13} alt="design 13" />
            <img src={design14} alt="design 14" />
            <img src={design15} alt="design 15" />
          </div>
        </div>
        <div className="second-cateogry mt-12">
          <h1 className="text-7xl font-thin ml-4 mb-8">COVERS</h1>
          <div className="gallery flex justify-center items-center gap-6 flex-wrap">
            <img src={design4} alt="design 4" />
            <img src={design5} alt="design 5" />
            <img src={design6} alt="design 6" />
            <img src={design7} alt="design 7" />
            <img src={design8} alt="design 8" />
            <img src={design11} alt="design 11" />
          </div>
        </div>
      </section>
      {/* end designs */}
      {/* start top */}
      <section className="top py-16 overflow-x-hidden">
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutLeft"
        >
          <h1 className="text-center text-7xl mb-12">TOP 5</h1>
        </AnimationOnScroll>
        <Confetti />
        <div className="cards flex justify-center items-center gap-12 flex-wrap">
          <div class="card card-1">
            <div class="contentBx">
              <h1>Ahmed Abdelaal</h1>
            </div>
          </div>
          <div class="card card-2">
            <div class="contentBx">
              <h1>Ahmed Assad</h1>
            </div>
          </div>
          <div class="card card-3">
            <div class="contentBx">
              <h1>Sondos Ahmed</h1>
            </div>
          </div>
          <div class="card card-4">
            <div class="contentBx">
              <h1>Mariam Alsawi</h1>
            </div>
          </div>
          <div class="card card-5">
            <div class="contentBx">
              <h1>Yousif Essam</h1>
            </div>
          </div>
        </div>
      </section>
      {/* end top */}
      {/* start team */}
      <section className="team py-16 overflow-x-hidden">
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutLeft"
        >
          <h1 className="text-center text-7xl mb-12">TEAM</h1>
        </AnimationOnScroll>
        <div className="cards flex justify-center flex-wrap gap-16">
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner flex flex-col justify-center items-center gap-6">
              <img src={soliman} alt="soliman" loading="lazy" />
              <div className="heading">
                <h1 className="font-extrabold text-xl text-center">
                  SOLIMAN EL-SAYED
                </h1>
                <h5 className="text-center text-base">GRAPHIC DESIGN HEAD</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner flex flex-col justify-center items-center gap-6">
              <img src={ahmedHamdy} alt="seif sameh" loading="lazy" />
              <div className="heading">
                <h1 className="font-extrabold text-xl text-center">
                  AHMED HAMDY
                </h1>
                <h5 className="text-center text-base">GRAPHIC DESIGN VICE</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end team */}
      <Footer />
    </main>
  );
};

export default Graphic;
