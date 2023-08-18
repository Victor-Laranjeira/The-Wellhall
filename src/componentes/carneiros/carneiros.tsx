import React from 'react';
import Image from 'next/image'
import styles from  './carneiros.module.css';
import costaAzul from '../../images/DUE_Costa-Azul_Fachada-Studio02-1920x994.jpg'
import costaDoMar from '../../images/FACHADA-COSTA-DO-MAR-1920x994.jpg'

import dueLogo from '../../images/Due-logo.png'

const Carneiros: React.FC = () => {

  const carneirosInfoArray = [
    {
      image: costaAzul,
      resortName: 'VILA COSTA AZUL',
      resortPrice: 'A PARTIR DE R$ 558.500',
      resortSpace: '62,79M² - 175,29M²'
    },
    {
      image: costaDoMar,
      resortName: 'VILA COSTA DO MAR',
      resortPrice: 'A PARTIR DE R$ 556.500',
      resortSpace: '30,27M² - 124,87M²'
    },
    {
      image: dueLogo,
      resortName: 'NOMAR',
      resortPrice: 'A PARTIR DE R$ 827.400',
      resortSpace: '56,87M² - 90,47M²'
    },
    {
      image: dueLogo,
      resortName: 'Lançamento',
      resortPrice: 'FILA DE ESPERA COM CADASTRO',
      resortSpace: '56,87M² - 90,47M²'
    }
  ]

  return (
    <div className={styles.page}>
      <div className={styles.beachBody}>
          {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.welcome}>
            Welcome to
          </h1>
          <h1 className={styles.beachName}>
            Carneiros
          </h1>
        </div>
        {/* Catalogo de opções Muro alto e Carneiros */}
        <div className={styles.beachList}>
          <div className={styles.beachColumn}>
            {
              carneirosInfoArray.map(carneirosInfo => {
                return (
                  <div>
                    <div className={styles.imageContainer}>
                      {/* Inserir imagens */}
                      <Image className={styles.image} src={carneirosInfo.image} alt='Imagem' />
                    </div>
                    <div className={styles.resortInfoContainer}>
                      <div className={styles.resortNameContainer}>
                        <div className={styles.resortName}>
                          {carneirosInfo.resortName}
                        </div>
                      </div>
                      <div className={styles.resortPriceContainer}>
                        <div className={styles.resortPrice}>
                          {carneirosInfo.resortPrice}
                        </div>
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

export default Carneiros;