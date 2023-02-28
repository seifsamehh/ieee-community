import React , { useState, useEffect } from 'react'
import {useLayoutEffect} from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import AnimatedCursor from "react-animated-cursor"
import { Online, Offline } from 'react-detect-offline';
import { Desktop, DesktopAr, Embded, EmbdedAr, Error, Graphic, GraphicAr, Home, HomeAr, Hr, HrAr, Landing, LandingAr, Media, MediaAr, Ml, MlAR, Pr, PrAr, Team, TeamAr, Tracks, TracksAr, Ui, UiAR } from './components';
import logo from './assets/logo.webp'
import './App.css'

// from scrolling top during router
const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 
const App = _ => {
  // loading
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  return (
    <>
    <AnimatedCursor 
      innerSize={10}
      outerSize={10}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
    {
      loading?
      // loader
      <div className="loader w-full h-screen flex flex-col justify-center items-center gap-8">
        <img src={logo} alt="logo" />
        <div className="socket">
          <div className="gel center-gel">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c1 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c2 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c3 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c4 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c5 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c6 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          
          <div className="gel c7 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          
          <div className="gel c8 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c9 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c10 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c11 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c12 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c13 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c14 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c15 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c16 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c17 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c18 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c19 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c20 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c21 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c22 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c23 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c24 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c25 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c26 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c28 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c29 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c30 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c31 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c32 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c33 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c34 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c35 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c36 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c37 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          
        </div>
      </div>
      :
      <>
      {/* content */}
        <Online>
          <BubblyContainer/>
          <Wrapper>
            <Routes>
              <Route path='/' element={<Landing/>} />
              <Route path='*' element={<Error/>} />
              <Route path='/arabic' element={<LandingAr/>} />
              <Route path='/web' element={<Home/>} />
              <Route path='/webAr' element={<HomeAr/>} />
              <Route path='/Ml' element={<Ml/>} />
              <Route path='/Ml-Ar' element={<MlAR/>} />
              <Route path='/UI-UX' element={<Ui/>} />
              <Route path='/UI-UX-Ar' element={<UiAR/>} />
              <Route path='/desktop' element={<Desktop/>} />
              <Route path='/desktopAr' element={<DesktopAr/>} />
              <Route path='/hr' element={<Hr/>} />
              <Route path='/hrAr' element={<HrAr/>} />
              <Route path='/pr' element={<Pr/>} />
              <Route path='/prAr' element={<PrAr/>} />
              <Route path='/media' element={<Media/>} />
              <Route path='/mediaAr' element={<MediaAr/>} />
              <Route path='/tracks' element={<Tracks/>} />
              <Route path='/tracksAr' element={<TracksAr/>} />
              <Route path='/team' element={<Team/>} />
              <Route path='/teamAr' element={<TeamAr/>} />
              <Route path='/Embded' element={<Embded/>} />
              <Route path='/EmbdedAr' element={<EmbdedAr/>} />
              <Route path='/Graphic' element={<Graphic/>} />
              <Route path='/GraphicAr' element={<GraphicAr/>} />
            </Routes>
          </Wrapper>
        </Online>
        <Offline>
          <div className="offline h-screen flex justify-center items-center flex-col gap-6">
            <h1 className='text-center text-8xl font-thin'>Please Check Your Network</h1>
            <p className='text-4xl font-thin text-center'>" LETS MAKE IT BLUE EVERYWHERE "</p>
          </div>
        </Offline>
      </>
    }
    </>
  )
}

export default App
