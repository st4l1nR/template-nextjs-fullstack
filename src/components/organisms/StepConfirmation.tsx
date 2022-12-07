import React from 'react';
import { Title, Icon, ButtonLink } from '@components/atoms';
import { FooterStep } from '@components/molecules/indext';
import classNames from '@lib/classNames';
import { UseFormReturn } from 'react-hook-form';
import format from 'format-number';

export type props = {
  className?: string;
  variant: '1c' | '1d' | '2b' | '2c';
} & UseFormReturn<any>;
const variants = {
  '1c': {
    header: 'Total des crédits (voir note ci-dessous)',
    description: 'Le calcul est approximatif et est donné à titre d’information uniquement.',
  },
  '1d': {
    header: 'Contactez-nous pour en savoir plus',
    description: 'Ou appuyez sur le bouton en dessous',
    button: {
      href: 'https://www.canada.ca/fr/agence-revenu/services/recherche-scientifique-developpement-experimental-programme-encouragements-fiscaux/politiques-procedures-lignesdirectrices/lignes-directrices-admissibilite-travaux-rdse-encouragements-fiscaux.html',
      label: 'En Savoir Plus',
      icon: <Icon className="transform -rotate-45 w-3 h-3" name="arrow-right" />,
      iconPosition: 'right',
    },
  },
  '2b': {
    header: 'Il y a des chances que votre projet soit éligible',
    description: 'Partagez votre réponse avec nous ci-dessous !',
    button: {
      href: '/',
      label: 'Retour à la page d’accueil',
      icon: <Icon className="transform rotate-45 w-3 h-3" name="arrow-left" />,
    },
  },
  '2c': {
    header: 'Contactez-nous pour en savoir plus',
    button: {
      href: '/',
      label: 'Retour à la page d’accueil',
      icon: <Icon className="transform rotate-45 w-3 h-3" name="arrow-left" />,
    },
  },
};

const StepConfirmation: React.FC<props> = ({ className, variant, watch }) => {
  const selectedVariant = variants[variant] as any;
  const [corporationType, totalSalaries, totalMaterials, totalSubcontractors, totalFunding] = watch([
    'corporationType',
    'totalSalaries',
    'totalMaterials',
    'totalSubcontractors',
    'totalFunding',
  ]);
  const calculate = () => {
    let x, a, b, c;
    if (corporationType == 'sppc') {
      a = totalSalaries + 0.5 * totalSubcontractors - 50000 - totalFunding;
      if (a < 0) {
        b = 0;
      } else {
        b = 0.3 * a;
      }
      c = 0.35 * (totalSalaries * 1.55 + totalMaterials + 0.8 * totalSubcontractors - b - totalFunding);
    } else {
      a = totalSalaries + 0.5 * totalSubcontractors - 50000 - totalFunding;
      if (a < 0) {
        b = 0;
      } else {
        b = 0.15 * a;
      }
      c = 0.2 * (totalSalaries * 1.55 + totalMaterials + 0.8 * totalSubcontractors - b - totalFunding);
    }
    x = b + c;
    return Math.round(x * 100) / 100;
  };
  console.log(watch());
  console.log(calculate());
  return (
    <div
      className={classNames('py-10 card px-14 flex flex-col space-y-5 items-center text-center', className)}
    >
      <div className="p-8 bg-primary-500 rounded-full flex items-center justify-center text-white">
        <Icon className="w-12 h-12" name="check" />
      </div>
      <div className="flex flex-col space-y-3">
        <Title level="h3" text={selectedVariant.header} />
        {variant == '1c' && (
          <Title className="text-primary-500" level="h1" text={format({ prefix: '$' })(calculate())} />
        )}
        {selectedVariant.description && <p className="font-bold text-lg">{selectedVariant.description}</p>}
      </div>
      {variant == '1c' ? (
        <div className="w-full">
          <FooterStep className="border-t pt-5" prev="1b" />
        </div>
      ) : (
        <ButtonLink size="large" {...selectedVariant.button} />
      )}
    </div>
  );
};

export default StepConfirmation;
