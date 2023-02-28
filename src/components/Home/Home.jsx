import React from "react";
import Confetti from "react-confetti";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Helmet } from "react-helmet-async";
import Header from "../header/Header";
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
import Footer from "../footer/Footer";
import "./style/home.css";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Web Development</title>
      </Helmet>
      <Header />
      {/* start intro */}
      <section
        className="intro h-screen flex justify-center items-center overflow-hidden"
        id="intro"
      >
        <div className="heading-box">
          <h1 className="web text-center text-9xl font-thin animate__animated animate__backInDown">
            WEB
          </h1>
          <h1 className="dev text-center text-9xl animate__animated animate__backInUp animate__delay-1s">
            DEVELOPMENT
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
          <h1 className="text-center text-7xl">WHAT IS WEB DEVELOPMENT ?</h1>
        </AnimationOnScroll>
        <p className="text-center">
          Web development is the work involved in developing a website for the
          Internet or an intranet.
          <br /> Web development can range from developing a simple single
          static page of plain text
          <br /> to complex web applications, electronic businesses, and social
          network services. A web developer’s job is to create websites.
          <br /> While their primary role is to ensure the website is visually
          appealing and easy to navigate,
          <br /> many web developers are also responsible for the website’s
          performance and capacity.
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
            <img src={html} alt="html" />
            <p>
              The HyperText Markup Language or HTML is the standard markup
              language for documents designed to be displayed in a web browser.
              It can be assisted by technologies such as Cascading Style Sheets
              and scripting languages such as JavaScript.
            </p>
            <a href={htmlDoc} download>
              <button>Download</button>
            </a>
          </div>
          <div className="box-2">
            <img src={css} alt="css" />
            <p>
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML or XML. CSS is a cornerstone technology of
              the World Wide Web, alongside HTML and JavaScript.
            </p>
          </div>
          <div className="box-3">
            <img src={bootstrap} alt="bootstrap" />
            <p>
              Bootstrap is a free and open-source CSS framework directed at
              responsive, mobile-first front-end web development. It contains
              HTML, CSS and JavaScript-based design templates for typography,
              forms, buttons, navigation, and other interface components.
            </p>
          </div>
          <div className="box-4">
            <img src={tailwind} alt="tailwind" />
            <p>
              Tailwind CSS is an open source CSS framework. The main feature of
              this library is that, unlike other CSS frameworks like Bootstrap,
              it does not provide a series of predefined classes for elements
              such as buttons or tables.
            </p>
          </div>
          <div className="box-5">
            <img src={scss} alt="scss" />
            <p>
              Syntactically Awesome Style Sheet is the superset of CSS. SCSS is
              the more advanced version of CSS. SCSS was designed by Hampton
              Catlin and was developed by Chris Eppstein and Natalie Weizenbaum.
              Due to its advanced features it is often termed as Sassy CSS.
            </p>
          </div>
          <div className="box-6">
            <img src={JavaScript} alt="JavaScript" />
            <p>
              JavaScript, often abbreviated as JS, is a programming language
              that is one of the core technologies of the World Wide Web,
              alongside HTML and CSS. As of 2022, 98% of websites use JavaScript
              on the client side for webpage behavior, often incorporating
              third-party libraries.
            </p>
          </div>
          <div className="box-7">
            <img src={Jquery} alt="Jquery" />
            <p>
              jQuery is a JavaScript library designed to simplify HTML DOM tree
              traversal and manipulation, as well as event handling, CSS
              animation, and Ajax. It is free, open-source software using the
              permissive MIT License. As of Aug 2022, jQuery is used by 77% of
              the 10 million most popular websites.
            </p>
          </div>
          <div className="box-8">
            <img src={ajax} alt="ajax" />
            <p>
              Ajax is a set of web development techniques that uses various web
              technologies on the client-side to create asynchronous web
              applications. With Ajax, web applications can send and retrieve
              data from a server asynchronously without interfering with the
              display and behaviour of the existing page.
            </p>
          </div>
          <div className="box-9">
            <img src={json} alt="json" />
            <p>
              JSON is an open standard file format and data interchange format
              that uses human-readable text to store and transmit data objects
              consisting of attribute–value pairs and arrays. It is a common
              data format with diverse uses in electronic data interchange,
              including that of web applications with servers.
            </p>
          </div>
          <div className="box-10">
            <img src={git} alt="git" />
            <p>
              Git is free and open source software for distributed version
              control: tracking changes in any set of files, usually used for
              coordinating work among programmers collaboratively developing
              source code during software development.
            </p>
          </div>
          <div className="box-11">
            <img src={github} alt="github" />
            <p>
              GitHub, Inc., is an Internet hosting service for software
              development and version control using Git. It provides the
              distributed version control of Git plus access control, bug
              tracking, software feature requests, task management, continuous
              integration, and wikis for every project.
            </p>
          </div>
          <div className="box-12">
            <img src={npm} alt="npm" />
            <p>
              npm is a package manager for the JavaScript programming language
              maintained by npm, Inc. npm is the default package manager for the
              JavaScript runtime environment Node.js. It consists of a command
              line client, also called npm, and an online database of public and
              paid-for private packages, called the npm registry.
            </p>
          </div>
          <div className="box-13">
            <img src={gulp} alt="gulp" />
            <p>
              gulp is an open-source JavaScript toolkit created by Eric
              Schoffstall used as a streaming build system in front-end web
              development.
            </p>
          </div>
          <div className="box-14">
            <img src={jest} alt="jest" />
            <p>
              Jest is a JavaScript testing framework built on top of Jasmine and
              maintained by Meta. It was designed and built by Christoph
              Nakazawa with a focus on simplicity and support for large web
              applications. It works with projects using Babel, TypeScript,
              Node.js, React, Angular, Vue.js and Svelte.
            </p>
          </div>
          <div className="box-15">
            <img src={reactjs} alt="react js" />
            <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. It is maintained
              by Meta and a community of individual developers and companies.
            </p>
          </div>
          <div className="box-16">
            <img src={material} alt="material ui" />
            <p>
              Material UI is an open-source, front-end framework for React
              components that has 60,500 plus stars on github. It is built using
              Less. Less (stands for Leaner Style Sheets), is a
              backward-compatible language extension for CSS.
            </p>
          </div>
          <div className="box-19">
            <img src={mysql} alt="mysql" />
            <p>
              MySQL is an open-source relational database management system. Its
              name is a combination of "My", the name of co-founder Michael
              Widenius's daughter My, and "SQL", the abbreviation for Structured
              Query Language.
            </p>
          </div>
          <div className="box-17">
            <img src={php} alt="php" />
            <p>
              PHP is a general-purpose scripting language geared toward web
              development. It was originally created by Danish-Canadian
              programmer Rasmus Lerdorf in 1993. The PHP reference
              implementation is now produced by The PHP Group.
            </p>
          </div>
          <div className="box-18">
            <img src={laravel} alt="laravel" />
            <p>
              Laravel is a free and open-source PHP web framework, created by
              Taylor Otwell and intended for the development of web applications
              following the model–view–controller architectural pattern and
              based on Symfony.
            </p>
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
              href="https://drive.google.com/file/d/1qfaznPlXyzqAV0ybnTWpwJUpWQP3DqWs/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-1 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION ONE</h1>
              </div>
            </a>
          </div>
          <div className="box-2 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1CIl1yvwKKP4XR6APVu9VvIzbSKt-dSzS/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-2 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION TWO</h1>
              </div>
            </a>
          </div>
          <div className="box-3 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1XU4dTGEbABFxCv-ewjgxuv6GxfKBzERg/view?usp=share_link"
              target="_blank"
            >
              <div className="lec-3 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION THREE</h1>
              </div>
            </a>
            <a
              href="https://assignment-1-seifsamehh.vercel.app/"
              target="_blank"
            >
              <button>Assignment</button>
            </a>
            <a href={best1} download>
              <button>Best Practice</button>
            </a>
          </div>
          <div className="box-4 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/drive/folders/1Wlm4l04cUaNOh3ojqtznzMDLAnvnRSpj?usp=sharing"
              target="_blank"
            >
              <div className="lec-4 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION FOUR</h1>
              </div>
            </a>
            <a href="https://assignment-2-zeta.vercel.app/" target="_blank">
              <button>Assignment</button>
            </a>
            <a href={best2} download>
              <button>Best Practice</button>
            </a>
          </div>
          <div className="box-5 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1HXTKNjOVtS7D9NKe5KlItILoMTUbYbCd/view?usp=sharing"
              target="_blank"
            >
              <div className="lec-5 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION FIVE</h1>
              </div>
            </a>
            <a href="https://assignment-3-alpha.vercel.app/" target="_blank">
              <button>Final Project</button>
            </a>
          </div>
          <div className="box-6 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1RWItx80MlW6I66c9mxbYKvnZZXib7q4s/view?usp=share_link"
              target="_blank"
            >
              <div className="lec-6 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION SIX</h1>
              </div>
            </a>
            <a href="https://ieee-task.vercel.app/" target="_blank">
              <button>Assignment</button>
            </a>
          </div>
          <div className="box-7 flex flex-col justify-center items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1ELjP4-Dhfj_ynGnqAJvr2Ue7tewo1Lio/view?usp=share_link"
              target="_blank"
            >
              <div className="lec-7 flex justify-center items-center">
                <h1 className="text-center text-5xl">SESSION SEVEN</h1>
              </div>
            </a>
            <a href="https://css-task-ieee.vercel.app/" target="_blank">
              <button>Assignment</button>
            </a>
          </div>
        </div>
      </section>
      {/* end lectures */}
      {/* start top */}
      <section className="top py-16 overflow-hidden">
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutLeft"
        >
          <h1 className="text-center text-7xl mb-12">TOP 3</h1>
        </AnimationOnScroll>
        <Confetti />
        <div className="images flex justify-center items-center gap-12 flex-wrap">
          <img src={one} alt="first place" />
          <img src={two} alt="second place" />
          <img src={three} alt="third place" />
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
              <img src={seif} alt="seif sameh" loading="lazy" />
              <div className="heading">
                <h1 className="font-extrabold text-xl text-center">
                  SEIF SAMEH
                </h1>
                <h5 className="text-center text-base">WEB HEAD</h5>
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
                  AHMED MOHAMED
                </h1>
                <h5 className="text-center text-base">WEB VICE</h5>
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
                  AHMED SHERIF
                </h1>
                <h5 className="text-center text-base">CORE TEAM MEMBER</h5>
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
                  AHMED HISHAM
                </h1>
                <h5 className="text-center text-base">CORE TEAM MEMBER</h5>
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
                  SALMA MOHAMED
                </h1>
                <h5 className="text-center text-base">CORE TEAM MEMBER</h5>
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
                  RAHMA OSAMA
                </h1>
                <h5 className="text-center text-base">CORE TEAM MEMBER</h5>
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

export default Home;
