import React from "react";
import Confetti from "react-confetti";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Helmet } from "react-helmet-async";
import HeaderAr from "../header-ar/HeaderAr";
import html from "../../assets/html.webp";
import css from "../../assets/css.webp";
import bootstrap from "../../assets/Bootstrap.webp";
import tailwind from "../../assets/tailwind.webp";
import scss from "../../assets/scss.webp";
import JavaScript from "../../assets/javascript.webp";
import Jquery from "../../assets/jquery.webp";
import ajax from "../../assets/ajax.webp";
import json from "../../assets/json.webp";
import git from "../../assets/git.webp";
import github from "../../assets/github.webp";
import npm from "../../assets/npm.webp";
import gulp from "../../assets/gulp.webp";
import jest from "../../assets/jest.webp";
import reactjs from "../../assets/react.webp";
import material from "../../assets/material-ui.webp";
import php from "../../assets/PHP.webp";
import laravel from "../../assets/laravel.webp";
import mysql from "../../assets/mysql.webp";
import seif from "../../assets/seif.webp";
import ahmedMohamed from "../../assets/ahmedMohamed.webp";
import rahma from "../../assets/rahmaOsama.webp";
import ahmedHisham from "../../assets/ahmedHisham.webp";
import ahmedSherif from "../../assets/ahmedSherif.webp";
import salma from "../../assets/salmaMohamed.webp";
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
import htmlDoc from "../../documents/HTML-COURSE.pdf";
import best1 from "../../videos/best.webm";
import best2 from "../../videos/test.webm";
import FooterAr from "../footer-ar/FooterAr";
import "./style/home-ar.css";

const HomeAr = () => {
  return (
    <main className="arabic">
      <Helmet>
        <title>تطوير الويب</title>
      </Helmet>
      <HeaderAr />
      {/* start intro */}
      <section className="intro-ar h-screen flex justify-center items-center overflow-hidden">
        <div className="heading-box">
          <h1 className="web text-center text-9xl font-thin animate__animated animate__backInDown">
            تطوير
          </h1>
          <h1 className="dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s">
            الويب
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
          <h1 className="text-center text-7xl">ما هو تطوير الويب؟</h1>
        </AnimationOnScroll>
        <p className="text-center">
          تطوير الويب هو العمل الذي ينطوي عليه تطوير موقع ويب للإنترنت أو
          الإنترانت يمكن أن يتراوح تطوير الويب
          <br /> من تطوير صفحة ثابتة واحدة بسيطة من نص عادي إلى تطبيقات الويب
          المعقدة والأعمال الإلكترونية وخدمات الشبكات الاجتماعية
          <br /> وظيفة مطور الويب هي إنشاء مواقع الويب في حين أن دورهم الأساسي
          هو التأكد من أن موقع الويب
          <br /> جذاب بصريًا وسهل التنقل فيه ، فإن العديد من مطوري الويب مسؤولون
          أيضًا عن أداء الموقع وسعته
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
            <img src={html} alt="html" />
            <p>
              هي لغة من لغات ترميز النصوص ، أو كما تُعرف بلغة توصيف النص ، هي
              عبارة عن جُملة من التلميحات و الأوامر و الوسوم حول نص معين ، و
              التي تحدد كيفيّة تنظيمه ، و تنسيقه ، و وصفه
            </p>
            <a href={htmlDoc} download>
              <button>تحميل</button>
            </a>
          </div>
          <div className="box-2">
            <img src={css} alt="css" />
            <p>
              لغة توصيفية تقوم بمنح موقع الويب شكله الجميل وتصميمه الفريد الذي
              سيميزه عن غيره من المواقع
            </p>
          </div>
          <div className="box-3">
            <img src={bootstrap} alt="bootstrap" />
            <p>
              إطار عمل مجاني يستخدم لتسهيل عملية تصميم صفحات الويب على المطور
              حيث يوفر له كلاسات جاهزة يمكنه إستخدامها لإظهار العناصر التي
              نضيفها في الصفحات بشكل جميل جداً و متجاوب مع حجم الصفحة
            </p>
          </div>
          <div className="box-4">
            <img src={tailwind} alt="tailwind" />
            <p>
              اطار عمل لا يعتمد على المكونات الجاهزة كباقى اطر العمل الاخرى
              والجميل في هذا اطار العمل أنه يوفر لك أساسيات أولية لما تحتاجه
              لتصميم صفحات الويب أو بالأحرى يوفر لك نظام تصميم خاص بك مثل
              الهوامش ، والأحجام ، والألوان …الخ
            </p>
          </div>
          <div className="box-5">
            <img src={scss} alt="scss" />
            <p>
              هي عبارة عن محرك أو معالج , يقوم فعلياً باضافة خواص برمجية ومعروف
              عن لغات الهيكلة افتقارها للخواص البرمجية , تضيف الى أكوادك
              امكانيات هائلة كالمتغيرات و الجمل الشرطية وأترك لك مهمة تخيل ما
              يمكنك تحقيقه وانجازه بهذه الميزات , أو حتى كمية الوقت الذي ستوفره{" "}
            </p>
          </div>
          <div className="box-6">
            <img src={JavaScript} alt="JavaScript" />
            <p>
              هي لغة برمجة عالية المستوى تستخدم أساسا في متصفحات الويب لإنشاء
              صفحات أكثر تفاعلية يتم تطويرها حاليا من طرف شركة نتسكيب وشركة
              موزيلا. هي لغة برمجية عالية المستوى تستخدم أساساً في متصفحات الويب
              ولها استخدامات واسعة أخرى في المجالات الأخرى , تضيف اساساً تفاعلية
              عالية الى صفحة الويب الخاصة بك
            </p>
          </div>
          <div className="box-7">
            <img src={Jquery} alt="Jquery" />
            <p>
              عبارة عن مكتبة تحوي مجموعة توابع سريعة وصغيرة بُنيت بحيث تختصر
              العمليات التي تحتاج عدداً كبيراً من الأسطر البرمجية إلى مجموعة
              توابع تُستدعى بسطر برمجي واحد
            </p>
          </div>
          <div className="box-8">
            <img src={ajax} alt="ajax" />
            <p>
              هي تقنية وليست لغة برمجة تتيح إمكانية العمل على متصفحات الويب
              بطريقة مشابهة للعمل على سطح المكتب. و هى غير متزامنة تستخدم
              تطبيقات{" "}
            </p>
          </div>
          <div className="box-9">
            <img src={json} alt="json" />
            <p>
              هي صيغة بسيطة وقابلة للقراءة بسهولة من قبل الإنسان وتستخدم لتمثيل
              البيانات و تبادلها بين الأنظمة البرمجية المختلفة. جيسون ليست لغة
              برمجية إنما هي طريقة متفق عليها بين لغات البرمجة المختلفة لتمثيل
              البيانات بهدف سهولة تبادل البيانات بين هذه اللغات. صيغة جيسون تمثل
              عن طريق نص، والبنية لهذا النص تشبه الكائن أو Object في لغة البرمجة
              جافاسكربت, وهذه الصيغة مدعومة من لغات البرمجة الأساسية الأخرى
              وتستخدم هذه الصيغة بشكل كبير لتبادل البيانات بين الخادم والعميل
            </p>
          </div>
          <div className="box-10">
            <img src={git} alt="git" />
            <p>
              أنه نظام ملفات أو قاعدة بيانات، تقوم هذه الأخيرة بتخزين العمليات و
              التحديثات التي قمت بإجرائها على ملفاتك أو مشروعك، بحيث يمكن العودة
              لتلك التعديلات و التحديثات في أي وقت كان قبل التعديل في حين كنت
              تريد التراجع عن التعديلات أو التحديثات أو حذفها
            </p>
          </div>
          <div className="box-11">
            <img src={github} alt="github" />
            <p>
              يعد موقع غيتهاب من المواقع المهمة للمبرمجين حول العالم , فهو يحتوي
              على كمية مشاريع مفتوحة المصدر ومنها مشاريع ضخمة ومهمة في عالم
              التقنية والبرمجة بشكل عام , وسنقدم في هذا المقال دليل كامل
              للمبتدئين لفهم منصة جيتهاب وطريقة استخدامها والتعامل معها
            </p>
          </div>
          <div className="box-12">
            <img src={npm} alt="npm" />
            <p>
              إن اي إطار عمل يجب ان يوفر بيئة جيدة جدا للتطوير و تسهيل عملية
              تحميل المكتبات و الحزم البرمجية التي تدعم المطور و تسرع عملية
              التطوير .. ما يؤدي لزيادة استخدام إطار العمل نفسه
            </p>
          </div>
          <div className="box-13">
            <img src={gulp} alt="gulp" />
            <p>
              أدوات لتنفيذ مهام البناء ثلًا لديك شيفرة، هذه الشيفرة قبل أن ترسل
              للمستخدم، وتضغط وتضع في مجلدًا معينًا، القيام بالإمر بشكل يدوي
              مملٌ كل مرة تكتب تعديلًا جديدًا، ولكي يفهم كيف يبني مطورون أخرون
              الشيفرة، لهذا تستخدم أدوات البناء تنشيء مُهِمّة للقيام بالضغط
              ومهمة للنقل، وهكذا
            </p>
          </div>
          <div className="box-14">
            <img src={jest} alt="jest" />
            <p>
              هو إطار عمل اختبار مفتوح المصدر فهو يدمج تلقائيًا جميع أدوات
              الاختبار التي يحتاجها المطورون ، مثل التأكيدات وتقارير التغطية.
              إنه إطار اختبار تكوين صفري تقريبًا. وهو سهل للغاية لاختبار إطار
              عمل الواجهة الأمامية مفتوح المصدر
            </p>
          </div>
          <div className="box-15">
            <img src={reactjs} alt="react js" />
            <p>
              هي مكتبة لانشاء واجهات المستخدم تُستخدم في تطوير الويب لبناء عناصر
              تفاعلية على مواقع الويب
            </p>
          </div>
          <div className="box-16">
            <img src={material} alt="material ui" />
            <p>
              اطار مفتوح المصدر للواجهة الامامية لريأكت يحتوى على الكثير من
              المكونات الجاهزة
            </p>
          </div>
          <div className="box-19">
            <img src={mysql} alt="mysql" />
            <p>
              {" "}
              نظام إدارة قواعد البيانات العلائقية متعدد المستخدمين و عالي الأداء
              ، الذي أصبح المعيار في إنشاء تطبيقات قواعد البيانات على الويب أو
              خارجها
            </p>
          </div>
          <div className="box-17">
            <img src={php} alt="php" />
            <p>
              هي واحدة من أشهر لغات البرمجة التي يتم استخدامها في إنشاء مواقع
              الويب و هي من اللغات التي يقوم خادم الويب بتفسير و تنفيذ الكود
              الخاص بها ثم يرسل النتيجة ليتم عرضها في متصفح المستخدم، و لإنشاء
              صفحات ويب ديناميكية أي صفحات متغيرة المحتوي و هذا المحتوي يتغير
              نتيجة التفاعل مع المستخدم
            </p>
          </div>
          <div className="box-18">
            <img src={laravel} alt="laravel" />
            <p>
              هو اطار عمل سيجعلك تقع حرفياً في حب هذه اللغة حتى وان كنت مصمم في
              الاساس , يقدم لارافل بيئة عمل متكاملة لكل ما تحتاجه او قد تحتاجه
              في اي فترة مستقبلية من حياتك المهنية
            </p>
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
        <div className="lec-boxs flex justify-center items-start flex-wrap gap-12">
          <div className="box-1 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1qfaznPlXyzqAV0ybnTWpwJUpWQP3DqWs/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-1 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة الأولى</h1>
              </div>
            </a>
          </div>
          <div className="box-2 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1CIl1yvwKKP4XR6APVu9VvIzbSKt-dSzS/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-2 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة الثانية</h1>
              </div>
            </a>
          </div>
          <div className="box-3 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1XU4dTGEbABFxCv-ewjgxuv6GxfKBzERg/view?usp=share_link"
              target="_blank"
            >
              <div className="lec-3 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة الثالثة</h1>
              </div>
            </a>
            <a
              href="https://assignment-1-seifsamehh.vercel.app/"
              target="_blank"
            >
              <button>التاسك</button>
            </a>
            <a href={best1} download>
              <button>أفضل حل</button>
            </a>
          </div>
          <div className="box-4 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/drive/folders/1Wlm4l04cUaNOh3ojqtznzMDLAnvnRSpj?usp=sharing"
              target="_blank"
            >
              <div className="lec-4 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة الرابعة</h1>
              </div>
            </a>
            <a href="https://assignment-2-zeta.vercel.app/" target="_blank">
              <button>التاسك</button>
            </a>
            <a href={best2} download>
              <button>أفضل حل</button>
            </a>
          </div>
          <div className="box-5 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1HXTKNjOVtS7D9NKe5KlItILoMTUbYbCd/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-5 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة الخامسة</h1>
              </div>
            </a>
            <a href="https://assignment-3-alpha.vercel.app/" target="_blank">
              <button>المشروع النهائى</button>
            </a>
          </div>
          <div className="box-6 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1RWItx80MlW6I66c9mxbYKvnZZXib7q4s/view?usp=share_link"
              target="_blank"
            >
              <div className="lec-6 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة السادسة</h1>
              </div>
            </a>
            <a href="https://ieee-task.vercel.app/" target="_blank">
              <button>التاسك</button>
            </a>
          </div>
          <div className="box-7 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1ELjP4-Dhfj_ynGnqAJvr2Ue7tewo1Lio/view?usp=share_link"
              target="_blank"
            >
              <div className="lec-7 flex justify-center items-center">
                <h1 className="text-center text-5xl">المحاضرة السابعة</h1>
              </div>
            </a>
            <a href="https://css-task-ieee.vercel.app/" target="_blank">
              <button>التاسك</button>
            </a>
          </div>
        </div>
      </section>
      {/* end lectures */}
      {/* start top ar */}
      <section className="top-ar py-16 overflow-x-hidden">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutRight"
        >
          <h1 className="text-center text-7xl mb-12">المراكز الثلاثة</h1>
        </AnimationOnScroll>
        <Confetti />
        <div className="images flex justify-center items-center gap-12 flex-wrap">
          <img src={one} alt="first place" />
          <img src={two} alt="second place" />
          <img src={three} alt="third place" />
        </div>
      </section>
      {/* end top ar */}
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
              <img src={seif} alt="seif sameh" loading="lazy" />
              <div className="heading">
                <h1 className="font-extrabold text-xl text-center">سيف سامح</h1>
                <h5 className="text-center text-base">قائد تطوير الويب</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner flex flex-col justify-center items-center gap-6">
              <img src={ahmedMohamed} alt="ahmed mohamed" loading="lazy" />
              <div className="heading">
                <h1 className="font-extrabold text-xl text-center">
                  أحمد محمد
                </h1>
                <h5 className="text-center text-base">
                  مساعد قائد تطوير الويب
                </h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner flex flex-col justify-center items-center gap-6">
              <img src={ahmedSherif} alt="ahmed sherif" loading="lazy" />
              <div className="heading">
                <h1 className="font-extrabold text-xl text-center">
                  أحمد شريف
                </h1>
                <h5 className="text-center text-base">عضو الفريق الأساسي</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner flex flex-col justify-center items-center gap-6">
              <img src={ahmedHisham} alt="ahmed hisham" loading="lazy" />
              <div className="heading">
                <h1 className="font-extrabold text-xl text-center">
                  أحمد هشام
                </h1>
                <h5 className="text-center text-base">عضو الفريق الأساسي</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner flex flex-col justify-center items-center gap-6">
              <img src={salma} alt="salma mohamed" loading="lazy" />
              <div className="heading">
                <h1 className="font-extrabold text-xl text-center">
                  سلمى محمد
                </h1>
                <h5 className="text-center text-base">عضو الفريق الأساسي</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner flex flex-col justify-center items-center gap-6">
              <img src={rahma} alt="rahma osama" loading="lazy" />
              <div className="heading">
                <h1 className="font-extrabold text-xl text-center">
                  رحمة أسامة
                </h1>
                <h5 className="text-center text-base">عضو الفريق الأساسي</h5>
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

export default HomeAr;
