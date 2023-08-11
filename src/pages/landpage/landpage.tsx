import React from 'react';
import Muroalto from '../../componentes/muroAlto/muroAlto';
import About from '../../componentes/about/about';
import Footer from '../../componentes/footer/footer'
import Contact from '../../componentes/contact/contact';
import Carneiros from '../../componentes/carneiros/carneiros';
import { NextPage } from 'next';

const LandPage: NextPage = () => {
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
