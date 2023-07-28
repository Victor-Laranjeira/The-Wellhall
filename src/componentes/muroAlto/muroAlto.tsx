import React from 'react';
import  './muroAlto.css';
import nature from '../../images/COMPLEXO-NATURE-1500x710.jpg'
import tropi from '../../images/COMPLEXO-TROPI-1500x710.jpg'
import exclusive from '../../images/Praia-Exclusive.jpg'
import cais from '../../images/thumb-cais.jpg'

const Muroalto: React.FC = () => {
  const images = [
    cais,
    nature,
    tropi,
    exclusive,
  ]

  const muroAltoInfoArray = [
    {
      resortName: 'Cais Eco Residencia',
      resortPrice: 'A PARTIR DE R$ 1.042.400',
      resortSpace: '62,79M² - 175,29M²'
    },
    {
      resortName: 'Naturê Eco Residencia',
      resortPrice: 'A PARTIR DE R$ 581.400',
      resortSpace: '30,27M² - 124,87M²'
    },
    {
      resortName: 'Tropí Eco Residencia',
      resortPrice: 'A PARTIR DE R$ 1.045.400',
      resortSpace: '56,87M² - 90,47M²'
    },
    {
      resortName: 'Praia Exclusive',
      resortPrice: 'A partir de R$ 1.800.400',
      resortSpace: '56,87M² - 90,47M²'
    }
  ]

  const carneirosInfoArray = [
    {
      resortName: 'VILA COSTA AZUL',
      resortPrice: 'A PARTIR DE R$ 558.500',
      resortSpace: '62,79M² - 175,29M²'
    },
    {
      resortName: 'VILA COSTA DO MAR',
      resortPrice: 'A PARTIR DE R$ 556.500',
      resortSpace: '30,27M² - 124,87M²'
    },
    {
      resortName: 'NOMAR',
      resortPrice: 'A PARTIR DE R$ 827.400',
      resortSpace: '56,87M² - 90,47M²'
    },
    {
      resortName: 'Lançamento',
      resortPrice: 'FILA DE ESPERA COM CADASTRO',
      resortSpace: '56,87M² - 90,47M²'
    }
  ]

  return (
    <div className='page'>
      <div className='beachBody'>
          {/* Header */}
        <div className='header'>
          <h1 className='welcome'>
            Welcome to
          </h1>
          <h1 className='beachName'>
            Muro alto
          </h1>
        </div>
        {/* Catalogo de opções Muro alto e Carneiros */}
        <div className='beachList'>
          <div className='beachColumn'>
            {
              images.map(image => {
                return (
                  <div className='imageContainer'>
                    {/* Inserir imagens */}
                    <img className='image' src={image} alt='Imagem' />
                  </div>
                )
              })
            }
            {
              muroAltoInfoArray.map((resortInfo) => {
                return (
                  <div className='resortInfoContainer'>
                    <div className='resortNameContainer'>
                      <div className='resortName'>
                        {resortInfo.resortName}
                      </div>
                    </div>
                    <div className='resortPriceContainer'>
                      <div className='resortPrice'>
                        {resortInfo.resortPrice}
                      </div>
                    </div>
                    <div className='resortSpaceContainer'>
                      <div className='resortSpace '>
                        {resortInfo.resortSpace}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muroalto;