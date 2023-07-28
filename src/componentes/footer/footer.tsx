import React from 'react';
import './footer.css';
import dueLogo from '../../images/Due-logo.png'

const Footer: React.FC = () => {
  return (
    <div className='main'>
      <div className='footerContainer'>
        <div className='footerLogoContainer'>
          <img className='footerLogo' src={dueLogo} alt='footer logo' />
        </div>
      </div>
    </div>
  )  
}

export default Footer;