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
import FooterAr from "../footer-ar/FooterAr";
import HeaderAr from "../header-ar/HeaderAr";
import "./style/graphic-ar.css";

const GraphicAr = () => {
  return (
    <main className="graphic-ar">
      <Helmet>
        <title>تصميم جرافيك</title>
      </Helmet>
      <HeaderAr />
      {/* start intro */}
      <section className="intro-ar h-screen flex justify-center items-center overflow-hidden">
        <div className="heading-box">
          <h1 className="web text-center text-9xl font-thin animate__animated animate__backInDown">
            تصميم
          </h1>
          <h1 className="dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s">
            جرافيك
          </h1>
        </div>
      </section>
      {/* end intro */}
      {/* start about */}
      <section className="about-ar h-screen flex justify-center items-center flex-col gap-12">
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutLeft"
        >
          <h1 className="text-center text-7xl">ما هو تصميم الجرافيك ؟</h1>
        </AnimationOnScroll>
        <p className="text-center">
          لجنة الإعلام الرقمي. تقع على عاتقنا مسؤولية التحكم في عمل وسائل
          الإعلام
          <br /> والهيئات العامة المرتبطة بها ، بما في ذلك التصميمات وتحرير
          مقاطع الفيديو الخاصة بالفصل
        </p>
      </section>
      {/* end about */}
      {/* start roadmap */}
      <section className="roadmap-ar">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutRight"
        >
          <h1 className="text-center text-7xl">ما هى خطة الدراسة ؟</h1>
        </AnimationOnScroll>
        <div className="boxs flex flex-wrap justify-center items-center gap-6 p-8">
          <div className="box-1">
            <h1 className="text-5xl text-center font-thin">
              تعلم تصميم الجرافيك
            </h1>
          </div>
          <div className="box-2">
            <h1 className="text-5xl text-center font-thin">
              تعلم أساسيات الفوتوشوب
            </h1>
          </div>
          <div className="box-3">
            <h1 className="text-5xl text-center font-thin">احتراف الفوتوشوب</h1>
          </div>
          <div className="box-4">
            <h1 className="text-5xl text-center font-thin">
              العمل على مشاريع كاملة
            </h1>
          </div>
          <div className="box-5">
            <h1 className="text-5xl text-center font-thin">
              بناء محفظة لمشاريعك
            </h1>
          </div>
          <div className="box-6">
            <h1 className="text-5xl text-center font-thin">
              المواقع التي تساعدك
            </h1>
          </div>
        </div>
      </section>
      {/* end roadmap */}
      {/* start lectures */}
      <section className="lectures-ar py-16 overflow-x-hidden">
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutLeft"
        >
          <h1 className="text-center text-7xl mb-12">المحاضرات</h1>
        </AnimationOnScroll>
        <div className="lec-boxs flex justify-center flex-wrap gap-12">
          <div className="box-6 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1T-May3b80UN2NqJI9z3AEqwsvFuIuoWa/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-6 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة السادسة</h1>
              </div>
            </a>
          </div>
          <div className="box-5 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1m3O_fHAnNLnJiq6Upf80_Fytm-HnJ6N-/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-5 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة الخامسة</h1>
              </div>
            </a>
          </div>
          <div className="box-4 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1bw1bbQJaKI3Lq6d88j1LC9xlFjsfSPud/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-4 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة الرابعة</h1>
              </div>
            </a>
          </div>
          <div className="box-3 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1y6_GPNt9QdlNWwN3PruHPWrygG_o3m3A/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-3 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة الثالثة</h1>
              </div>
            </a>
          </div>
          <div className="box-2 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1KuYiiywCyU6vb4eYQKAiJAvfY8-HWO99/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-2 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة الثانية</h1>
              </div>
            </a>
          </div>
          <div className="box-1 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1oSFy5KyiNIFMceAkPtQEJZfGHOz5dZaP/view?usp=share_link"
              target="_blank"
            >
              <div className="lec-1 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة الأولى</h1>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* end lectures */}
      {/* start designs */}
      <section className="designs-ar py-16 overflow-x-hidden">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutRight"
        >
          <h1 className="text-center text-7xl mb-12">أفضل تصميمات</h1>
        </AnimationOnScroll>
        <div className="first-cateogry">
          <h1 className="text-7xl font-thin mr-4 mb-8 text-end">منتجات</h1>
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
          <h1 className="text-7xl font-thin mr-4 mb-8 text-end">أغلفة</h1>
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
      <section className="top-ar py-16 overflow-x-hidden">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutRight"
        >
          <h1 className="text-center text-7xl mb-12">أفضل خمسة</h1>
        </AnimationOnScroll>
        <Confetti />
        <div className="cards flex justify-center items-center gap-12 flex-wrap">
          <div class="card card-1">
            <div class="contentBx">
              <h1>أحمد عبد العال</h1>
            </div>
          </div>
          <div class="card card-2">
            <div class="contentBx">
              <h1>أحمد أسعد</h1>
            </div>
          </div>
          <div class="card card-3">
            <div class="contentBx">
              <h1>سندس أحمد</h1>
            </div>
          </div>
          <div class="card card-4">
            <div class="contentBx">
              <h1>مريم الصاوى</h1>
            </div>
          </div>
          <div class="card card-5">
            <div class="contentBx">
              <h1>يوسف عصام</h1>
            </div>
          </div>
        </div>
      </section>
      {/* end top */}
      {/* start team */}
      <section className="team-ar py-16 overflow-x-hidden">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutRight"
        >
          <h1 className="text-center text-7xl mb-12">الفريق</h1>
        </AnimationOnScroll>
        <div className="cards flex justify-center flex-wrap gap-16">
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner flex flex-col justify-center items-center gap-6">
              <img src={soliman} alt="soliman" loading="lazy" />
              <div className="heading">
                <h1 className="font-extrabold text-xl text-center">
                  سليمان السيد
                </h1>
                <h5 className="text-center text-base">قائد تصميم الجرافيك</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner flex flex-col justify-center items-center gap-6">
              <img src={ahmedHamdy} alt="ahmed Hamdy" loading="lazy" />
              <div className="heading">
                <h1 className="font-extrabold text-xl text-center">
                  أحمد حمدى
                </h1>
                <h5 className="text-center text-base">
                  مساعد قائد تصميم الجرافيك
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end team */}
      <FooterAr />
    </main>
  );
};

export default GraphicAr;
