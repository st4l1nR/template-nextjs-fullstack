export type CreditFormInput = {
  workState: string;
  corporationType: 'sppc' | 'no-sppc';
  totalSalaries: number;
  totalMaterials: number;
  totalSubcontractors: number;
  sourceFunding: string;
  totalFunding: string;
};

export type SubventionFormInput = {
  projectType: string;
  benefit: string;
};
