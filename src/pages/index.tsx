import React from 'react';
import { Title } from '@components/atoms';
import { ContactForm } from '@components/organisms';
import { LayoutDefault } from '@components/templates';

const index = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 mt-64 section-container sm:grid-cols-2">
        <div className="card">
          <div>
            <Title level="h4" text="Crédits R&D (RS&DE)" />
            <p className="mt-5">
              Le programme fédéral le plus important pour encourager les entreprises à prendre des risques
              technologiques. Nous vous aidons à monter le dossier, remplir les formulaires et vous assistent
              en cas d’audit. Allez sur l’onglet pour savoir si votre projet est éligible et combien vous sera
              remboursé.
            </p>
          </div>
          <div className="mt-8">
            <Title level="h4" text="Subventions" />
            <p className="mt-5">
              Vous cherchez du financement pour vos projets? Des centaines de programmes gouvernementaux sont
              disponibles avec des montants allant de milliers à des millions de dollars. Allez sur l’onglet
              pour savoir si votre projet est admissible.
            </p>
          </div>
        </div>
        <div className="card">
          <Title level="h4" text="Planification stratégique" />
          <p className="mt-5">
            Il est parfois difficile pour les entreprises de choisir entre appliquer pour les subventions, les
            crédits d’impôt ou les deux. L’innovation, la technologie et la planification stratégique sont nos
            passions. Laissez-nous vous aider quelle que soit votre industrie : TI, design industriel,
            environnement, construction, pharmaceutique, alimentaire, biomédical etc.
          </p>
          <p className="mt-5">
            Nous sommes une équipe d’entrepreneurs, investisseurs et consultants qui avons acquis pendant plus
            de 15 ans, des connaissances et de l’expérience en prenant des défis de plus en plus complexes,
            aidant les PME à démarrer, à se redresser ou à prospérer.
          </p>
        </div>
      </div>
      <ContactForm className="mt-24" />
    </div>
  );
};

index.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
export default index;
