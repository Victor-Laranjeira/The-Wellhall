import React from 'react';
import styles from './footer.module.css';
import dueLogo from '../../images/Due-logo.png'

const Footer: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoContainer}>
          <img className={styles.footerLogo} src={dueLogo} alt='footer logo' />
        </div>
      </div>
    </div>
  )  
}

export default Footer;