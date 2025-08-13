import React from 'react';
import type { PedagogyStepData } from '../types';

interface PedagogyStepProps {
  data: PedagogyStepData;
}

const PedagogyStep: React.FC<PedagogyStepProps> = ({ data }) => {
  const { icon: IconComponent, title, description } = data;

  return (
    <div className="flex flex-col items-center max-w-xs text-center">
      <div className="bg-lab-blue/10 p-4 rounded-full mb-4 border-2 border-lab-blue/30">
        <IconComponent className="h-10 w-10 text-lab-blue" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default PedagogyStep;