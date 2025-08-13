import React from 'react';

const Header: React.FC = () => {
  const logoUrl = 'https://raw.githubusercontent.com/LABirintar/comercial/main/logoslabirintar/Labirintar_RGB.png';
  return (
    <header className="text-center mb-12 flex flex-col items-center">
      <img 
        src={logoUrl} 
        alt="LABirintar Logo" 
        className="h-28 w-auto mb-6" 
      />
      <h1 className="text-4xl md:text-5xl font-extrabold text-lab-red mb-2">
        Da escuta à Experiência
      </h1>
      <p className="text-lg md:text-xl text-slate-600 max-w-4xl">
        Como a LABirintar transforma dados em ação: um exemplo prático da nossa abordagem etnográfica e iterativa para a aula experimental na Builders.
      </p>
    </header>
  );
};

export default Header;