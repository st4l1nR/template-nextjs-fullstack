import React from 'react';
import classNames from '@lib/classNames';
import Navbar from './Navbar';
import { ButtonLink, Title, Icon } from '@components/atoms';

export type props = {
  variant?: 'primary' | 'secondary' | 'third';
  className?: string;
};
const Hero: React.FC<props> = ({ className, variant }) => {
  return (
    <div className={classNames('relative', className)}>
      <img
        className="absolute top-0 left-0 z-0 w-full"
        src={variant == 'primary' ? '/images/hero.png' : '/images/jump-2.png'}
        alt=""
      />
      <div className="relative z-10 text-white">
        <Navbar />
        {variant == 'primary' ? (
          <div className="flex flex-col items-center mt-24 text-center ">
            <Title level="h1" text="Experts en crédits d’impôt R&D et subventions" />
            <ButtonLink
              className="m-10"
              href="free-metting"
              label="Contactez-nous pour une rencontre gratuite"
              icon={<Icon className="text-white" name="arrow-right" />}
              iconPosition="right"
            />
          </div>
        ) : variant == 'secondary' ? (
          <div className="max-w-5xl mx-auto mt-24">
            <Title
              level="h2"
              text="Chaque année, plus de 20 000 entreprises canadiennes de toute taille et de tout secteur se
partagent trois milliards de dollars en incitatifs fiscaux dans le cadre du programme fédéral de
la RS&DE. Seulement 50% des entreprises qui y ont droit réclament des crédits RS&DE. Remplissez le
formulaire ci-joint pour savoir si votre projet se qualifie."
            />
          </div>
        ) : (
          <div className="max-w-5xl mx-auto mt-24">
            <Title
              level="h2"
              text="Les entreprises font face à d’importants défis de financement. Le marché compétitif oblige les entreprises à investir continuellement dans des
              projets d’amélioration et à gérer efficacement le risque lié à ces investissements. 
             
             Conscients de l’importance de ces projets dans l’essor économique du Canada, les gouvernements offrent divers programmes de subventions afin d’aider les entreprises à financer leurs projets et diminuer les risques liés à leurs investissements. Le gouvernement fédéral et les gouvernements provinciaux dépensent environ 35 milliards de
             dollars par année en subventions aux entreprises. Des centaines de programmes disponibles avec des montants allant de milliers à des millions de
              dollars. Remplissez le formulaire ci-joint pour savoir si votre projet se qualifie. "
            />
          </div>
        )}
      </div>
    </div>
  );
};

Hero.defaultProps = {
  variant: 'primary',
};

export default Hero;
