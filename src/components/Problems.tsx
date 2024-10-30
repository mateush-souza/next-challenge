import Image from 'next/image';
import React from 'react';

import car from '@/image/home/problems-car.png'
import timer from '@/image/home/timer.png'
import warning from '@/image/home/warning.png'
import person from '@/image/home/person.png'

const Problems = () => {
  const infos = {
    problemsItems: [
      {
        title: "Relate seu problema",
        description: "Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv Lorem ipstumvvLorem ipstumLorem ipstum vLorem ipstum"
      },
      {
        title: "Realize o diagnóstico",
        description: "Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv Lorem ipstumvvLorem ipstumLorem ipstum vLorem ipstum"
      },
      {
        title: "Orçe e realize o reparo",
        description: "Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv Lorem ipstumvvLorem ipstumLorem ipstum vLorem ipstum"
      }
    ],
    cards: [
      {
        image: timer,
        title: "Ganho de tempo e dinheiro",
        description: "Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv"
      },
      {
        image: warning,
        title: "Prevenção de maiores problemas",
        description: "Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv"
      },
      {
        image: person,
        title: "Praticidade e conforto",
        description: "Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstum Lorem ipstumvLorem ipstumvv"
      }
    ]
  };

  return (
    <>
          <section className="flex flex-col md:flex-row gap-6 p-[100px] px-[60px]">
        <div className="md:w-1/2">
          <Image
            src={car}
            alt="Imagem de problemas no carro"
            width={500}
            height={200}
            className="object-cover h-full"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 space-y-6 text-container">
          <h2 className="text-[20px] text-blue-500 mb-[30px]">
            Com o AutoCheckup, realize o auto diagnósticos do seu veículo para garantir o seu melhor desempenho
          </h2>
          <div className="container-items">
            {infos.problemsItems.map((item, index) => (
              <div key={index} className="space-y-2 mb-[30px]">
                <h3 className="text-[18px] text-blue-500">{item.title}</h3>
                <p className="text-[12px] text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0046C0] p-6">
        <div className="flex flex-wrap justify-between">
          {infos.cards.map((item, index) => (
            <div key={index} className="w-full md:w-1/3 mb-6 text-white text-center">
              <Image
                src={item.image || '/default-image.jpg'}
                alt={item.title}
                width={100}
                height={150}
                className="object-contain mx-auto mb-4"
              />
              <h3 className="text-[20px]">{item.title}</h3>
              <p className="text-[15px]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
  </>
  );
};

export default Problems;
