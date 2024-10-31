"use client"

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqData = [
    { question: "Lorem ipsum dolor sit amet dolor", answer: "Resposta para a pergunta 1." },
    { question: "Lorem ipsum dolor sit amet dolor", answer: "Resposta para a pergunta 2." },
    { question: "Lorem ipsum dolor sit amet dolor", answer: "Resposta para a pergunta 3." },
    { question: "Lorem ipsum dolor sit amet dolor", answer: "Resposta para a pergunta 4." },
    { question: "Lorem ipsum dolor sit amet dolor", answer: "Resposta para a pergunta 5." },
    { question: "Lorem ipsum dolor sit amet dolor", answer: "Resposta para a pergunta 6." },
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
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
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
};