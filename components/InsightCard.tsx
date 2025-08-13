import React from 'react';
import type { InsightCardData } from '../types';

interface InsightCardProps {
  data: InsightCardData;
}

const InsightCard: React.FC<InsightCardProps> = ({ data }) => {
  const { title, insight, connection, potential, className } = data;

  return (
    <div className={`bg-lab-cream border border-slate-200 rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg ${className}`}>
      <h3 className="font-bold text-xl mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 mb-2"><strong className="text-slate-700 font-semibold">Insight:</strong> {insight}</p>
      <p className="text-slate-600 mb-2"><strong className="text-slate-700 font-semibold">Conexão com a aula:</strong> {connection}</p>
      <p className="text-slate-600"><strong className="text-slate-700 font-semibold">Potencial futuro:</strong> {potential}</p>
    </div>
  );
};

export default InsightCard;