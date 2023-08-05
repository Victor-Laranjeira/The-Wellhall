import React from 'react';
import styles from  './carneiros.module.css';
import nature from '../../images/COMPLEXO-NATURE-1500x710.jpg'
import tropi from '../../images/COMPLEXO-TROPI-1500x710.jpg'
import exclusive from '../../images/Praia-Exclusive.jpg'
import cais from '../../images/thumb-cais.jpg'

const Carneiros: React.FC = () => {

  const carneirosInfoArray = [
    {
      image: cais,
      resortName: 'VILA COSTA AZUL',
      resortPrice: 'A PARTIR DE R$ 558.500',
      resortSpace: '62,79M² - 175,29M²'
    },
    {
      image: nature,
      resortName: 'VILA COSTA DO MAR',
      resortPrice: 'A PARTIR DE R$ 556.500',
      resortSpace: '30,27M² - 124,87M²'
    },
    {
      image: tropi,
      resortName: 'NOMAR',
      resortPrice: 'A PARTIR DE R$ 827.400',
      resortSpace: '56,87M² - 90,47M²'
    },
    {
      image: exclusive,
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
                      <img className={styles.image} src={carneirosInfo.image} alt='Imagem' />
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