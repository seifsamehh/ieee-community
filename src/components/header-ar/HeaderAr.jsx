import React, {useState} from 'react'
import { BubblyLink } from "react-bubbly-transitions";
import logo from '../../assets/logo.webp'
import './style/header-ar.css'

const HeaderAr = () => {
    const [navBar, setNavBar] = useState(false);
    const changeBackground = _ => {
        if(window.scrollY >= 80) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    };
    window.addEventListener('scroll',changeBackground);
  return (
    <nav className={navBar ? 'nav active' : 'nav'}>
        <header className='flex justify-between items-center p-8 header-ar' id='header-ar'>
            <nav className='flex gap-4 flex-wrap-reverse justify-center'>
                <BubblyLink to="/" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    انجليزى
                </BubblyLink>
                <BubblyLink to="/teamAr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    الفريق
                </BubblyLink>
                <BubblyLink to="/tracksAr" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    المسارات
                </BubblyLink>
                <BubblyLink to="/arabic" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    الصفحة الرئيسية
                </BubblyLink>
            </nav>
            <img src={logo} alt="logo" />
        </header>
    </nav>
  )
}

export default HeaderAr