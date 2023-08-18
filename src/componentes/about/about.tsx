import React from 'react';
import Image from 'next/image'
import styles from './about.module.css';
import aboutNature from '../../images/Sustentabilidadejpeg.jpeg'
import aboutEmpreendimento from '../../images/Empreendimento.png'
import aboutSketch from '../../images/architecture sketch.jpg'
import dueLogo from '../../images/Due-logo.png'

const About: React.FC = () => {

  const imagesDescription = [
    {
      image: aboutSketch,
      paragraph: 'A Due Incorporadora é conhecida por desenvolver e construir projetos imobiliários de alta qualidade. Eles trabalham em diferentes segmentos, incluindo residencial, comercial e corporativo. Seus empreendimentos são projetados para atender às necessidades dos clientes e oferecer soluções inovadoras no mercado imobiliário',
      type: 'Projetos imobiliários'
    },
    {
      image: aboutNature,
      paragraph: 'A empresa tem um forte compromisso com a sustentabilidade em seus projetos. Eles buscam incorporar práticas sustentáveis em todas as etapas do processo, desde a concepção até a construção. A Due Incorporadora valoriza o uso de materiais ecológicos, tecnologias eficientes em termos de energia e o desenvolvimento de áreas verdes nos empreendimentos.',
      type: 'Compromisso com a sustentabilidade'
    },
    {
      image: aboutEmpreendimento,
      paragraph: 'A Incorporadora Due é reconhecida por sua busca pela excelência e qualidade em todos os seus empreendimentos. Eles têm uma equipe de profissionais experientes e especializados que garantem a entrega de projetos de alto padrão. Além disso, a empresa valoriza a transparência e a confiabilidade nos negócios, construindo relacionamentos sólidos com seus clientes e parceiros.',  
      type: 'Excêlencia e confiabilidade'
    }
  ]

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutDue}>
        <div className={styles.aboutDueContainer}>
          <div className={styles.dueLogoContainer}>
            <Image className={styles.dueLogo} src={dueLogo} alt='imagem'/>
          </div>
          <p className={styles.aboutDueDescription}>
            Sobre a Due
          </p>
        </div>
        <div className={styles.aboutGrid}>
          {
            imagesDescription.map(description => {
              return (
                <div style={{ margin: '15px 0 15px 0' }}>
                  <div className={styles.aboutImageContainer}>
                    <Image className={styles.aboutImage} src={description.image} alt='imagem'/>
                  </div>
                  <div className={styles.paragraphContainer}>
                    <p className={styles.paragraphContent}>{description.paragraph}</p>
                    <div className={styles.contentTypeContainer}>
                      <p className={styles.contentType}>- {description.type}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default About;