import React, {useState} from 'react'
import { BubblyLink } from "react-bubbly-transitions";
import logo from '../../assets/logo.webp'
import './style/header.css'

const Header = () => {
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
        <header className='flex justify-between items-center p-8 header'>
            <img src={logo} alt="logo" />
            <nav className='flex gap-4 flex-wrap justify-center'>
                <BubblyLink to="/" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    Home
                </BubblyLink>
                <BubblyLink to="/tracks" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    Tracks
                </BubblyLink>
                <BubblyLink to="/team" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    Team
                </BubblyLink>
                <BubblyLink to="/arabic" duration={1500} colorStart="#1a5581" colorEnd="#fff">
                    Arabic
                </BubblyLink>
            </nav>
        </header>
    </nav>
  )
}

export default Header