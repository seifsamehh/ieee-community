import React from 'react'
import logo from '../../assets/logo.webp'
import facebook from '../../assets/facebook.webp'
import instgram from '../../assets/instgram.webp'
import './style/footer-ar.css'

const FooterAr = () => {
  return (
    <footer className='footer-ar p-4 flex justify-between items-center'>
      <div className="quote">
        <p className='text-center'>" لنجعلها زرقاء في كل مكان "</p>
        <div className="social-icons flex justify-center items-center gap-6">
          <a href="https://www.facebook.com/profile.php?id=100086469804756" target="_blank" title='فيسبوك'>
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://instagram.com/ieee_osb?igshid=YmMyMTA2M2Y=" target="_blank" title='انستجرام'>
            <img src={instgram} alt="instgram" />
          </a>
        </div>
      </div>
      <div className="content flex justify-center items-center flex-col gap-6">
        <p className='text-center'>كل الحقوق ترجع الى<br/>IEEE | OBOUR STUDENT BRANCH</p>
        <p className='seif'>
          <span className='ml-4'>برمج بواسطة</span>
          <a href="https://seif-sameh.vercel.app/" target="_blank">
              سيف سامح
              <svg viewBox="0 0 70 36">
                  <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
          </a>
        </p>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </footer>
  )
}

export default FooterAr