import React from 'react';
import styles from  './muroAlto.module.css';
import nature from '../../images/COMPLEXO-NATURE-1500x710.jpg'
import tropi from '../../images/COMPLEXO-TROPI-1500x710.jpg'
import exclusive from '../../images/Praia-Exclusive.jpg'
import cais from '../../images/thumb-cais.jpg'

const Muroalto: React.FC = () => {
  const muroAltoInfoArray = [
    {
      image: cais,
      resortName: 'Cais Eco Residencia',
      resortPrice: 'A PARTIR DE R$ 1.042.400',
      resortSpace: '62,79M² - 175,29M²'
    },
    {
      image: nature,
      resortName: 'Naturê Eco Residencia',
      resortPrice: 'A PARTIR DE R$ 581.400',
      resortSpace: '30,27M² - 124,87M²'
    },
    {
      image: tropi,
      resortName: 'Tropí Eco Residencia',
      resortPrice: 'A PARTIR DE R$ 1.045.400',
      resortSpace: '56,87M² - 90,47M²'
    },
    {
      image: exclusive,
      resortName: 'Praia Exclusive',
      resortPrice: 'A partir de R$ 1.800.400',
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
            Muro alto
          </h1>
        </div>
        {/* Catalogo de opções Muro alto e Carneiros */}
        <div className={styles.beachList}>
          <div className={styles.beachColumn}>
            {
              muroAltoInfoArray.map(muroAltoInfo => {
                return (
                  <div>
                    <div className={styles.imageContainer}>
                      {/* Inserir imagens */}
                      <img className={styles.image} src={muroAltoInfo.image} alt='Imagem' />
                    </div>
                    <div className={styles.resortInfoContainer}>
                      <div className={styles.resortNameContainer}>
                        <div className={styles.resortName}>
                          {muroAltoInfo.resortName}
                        </div>
                      </div>
                      <div className={styles.resortPriceContainer}>
                        <div className={styles.resortPrice}>
                          {muroAltoInfo.resortPrice}
                        </div>
                      </div>
                      <div className={styles.resortSpaceContainer}>
                        <div className={styles.resortSpace}>
                          {muroAltoInfo.resortSpace}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            {/* {
              muroAltoInfoArray.map((resortInfo) => {
                return (
                  <div className={styles.resortInfoContainer}>
                    <div className={styles.resortNameContainer}>
                      <div className={styles.resortName}>
                        {resortInfo.resortName}
                      </div>
                    </div>
                    <div className={styles.resortPriceContainer}>
                      <div className={styles.resortPrice}>
                        {resortInfo.resortPrice}
                      </div>
                    </div>
                    <div className={styles.resortSpaceContainer}>
                      <div className={styles.resortSpace}>
                        {resortInfo.resortSpace}
                      </div>
                    </div>
                  </div>
                )
              })
            } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muroalto;