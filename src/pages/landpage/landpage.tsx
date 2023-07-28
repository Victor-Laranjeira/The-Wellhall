import React from 'react';
import Muroalto from '../../componentes/muroAlto/muroAlto';
import About from '../../componentes/about/about';
import Footer from '../../componentes/footer/footer'
import Contact from '../../componentes/contact/contact';
import Carneiros from '../../componentes/carneiros/carneiros';

const LandPage: React.FC = () => {
  return (
    <>
      <Muroalto />
      <Carneiros />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default LandPage;
