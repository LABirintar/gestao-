import React from 'react';
import Header from './components/Header';
import InsightCard from './components/InsightCard';
import PedagogyStep from './components/PedagogyStep';
import Footer from './components/Footer';
import { ArrowIcon } from './components/icons';
import { INSIGHTS_DATA, PEDAGOGY_STEPS_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <main className="max-w-5xl mx-auto p-6 sm:p-8 md:p-12">
        <Header />
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-lab-red">Resultados da Escuta Etnográfica</h2>
          <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
            Aplicamos um questionário para entender as dores e desejos dos alunos do Ensino Fundamental 2. As respostas revelaram interesses claros, que foram usados como matéria-prima para desenhar uma aula experimental conectada com a realidade deles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INSIGHTS_DATA.map((insight) => (
              <InsightCard key={insight.title} data={insight} />
            ))}
          </div>
        </section>

        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-lab-blue">O Conceito Pedagógico em Ação</h2>
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                {PEDAGOGY_STEPS_DATA.map((step, index) => (
                    <React.Fragment key={step.title}>
                        <PedagogyStep data={step} />
                        {index < PEDAGOGY_STEPS_DATA.length - 1 && (
                             <div className="hidden md:block text-slate-400">
                                <ArrowIcon className="h-8 w-8" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default App;