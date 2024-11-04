"use client"

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqData = [
    { question: "Como funciona o AutoCheckup?", answer: "O AutoCheckup permite que você faça uma avaliação inicial do seu veículo, identificando possíveis problemas e direcionando para reparos, se necessário." },
    { question: "Preciso ser cliente da Porto Seguro para usar o AutoCheckup?", answer: "Não é necessário ser cliente da Porto Seguro para acessar o AutoCheckup, mas clientes possuem benefícios adicionais." },
    { question: "O AutoCheckup substitui uma revisão completa em uma oficina?", answer: "Não, o AutoCheckup é uma avaliação inicial. Para diagnósticos completos e manutenção, recomendamos levar o veículo a uma oficina especializada." },
    { question: "O AutoCheckup é gratuito?", answer: "Sim, o acesso ao AutoCheckup é gratuito, mas alguns serviços de reparo indicados podem ter custo." },
    { question: "Quais tipos de problemas o AutoCheckup pode identificar?", answer: "O AutoCheckup pode identificar problemas comuns, como falhas no motor, sistema de freios, iluminação e outros itens básicos de segurança." },
    { question: "Como posso agendar um reparo após o diagnóstico?", answer: "Após o diagnóstico, você pode agendar um reparo diretamente pela plataforma, escolhendo uma oficina recomendada ou de sua preferência." },
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="min-h-[720px] px-6 lg:px-20 py-12">
        <h2 className="text-center text-2xl font-bold text-blue-600 mb-2">Tire suas dúvidas sobre a <span className="text-black">Auto Seguro</span></h2>
        <p className="text-center text-gray-500 mb-8">
        Encontre respostas para as perguntas mais frequentes e saiba como o AutoCheckup pode facilitar o cuidado com o seu veículo.
        </p>
        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                onClick={() => toggleAccordion(index)}
                className="bg-blue-500 text-white rounded-lg p-4 cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                <FiChevronDown
                  className={`transition-transform duration-200 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <div className="bg-gray-100 rounded-lg p-4 mt-2">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
}