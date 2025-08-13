import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16">
      <div className="bg-lab-cream/50 border-2 border-lab-orange/80 rounded-lg p-8 text-center shadow-lg shadow-lab-orange/20">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Mensagem-Chave para as Coordenadoras</h3>
        <p className="text-lg md:text-xl italic text-slate-700">
          “O que vocês verão é o ciclo completo da nossa inovação pedagógica: <strong className="font-semibold text-lab-orange">imaginar, criar, materializar, digitalizar e interagir</strong>. Esse processo é fundamentado em dados vivos dos alunos, e é assim que a LABirintar constrói experiências que encantam e geram aprendizagem com sentido.”
        </p>
      </div>
    </footer>
  );
};

export default Footer;