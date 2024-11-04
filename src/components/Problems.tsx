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
        description: "Descreva os sintomas ou falhas que você está enfrentando com o seu veículo. Nossa plataforma guiará você no processo de identificar a causa provável e oferecer recomendações."
      },
      {
        title: "Realize o diagnóstico",
        description: "Através de uma série de perguntas e etapas guiadas, você pode fazer uma avaliação inicial dos principais sistemas do veículo. Obtenha informações detalhadas sobre o que pode estar acontecendo."
      },
      {
        title: "Orçe e realize o reparo",
        description: "Receba uma estimativa dos custos para solucionar o problema e agende o reparo de maneira prática e rápida, com opções de locais de confiança recomendados pela Porto Seguro."
      }
    ],
    cards: [
      {
        image: timer,
        title: "Ganho de tempo e dinheiro",
        description: "Com o AutoCheckup, você economiza tempo ao diagnosticar problemas rapidamente, sem precisar esperar uma avaliação inicial em uma oficina. Economize dinheiro ao saber exatamente o que precisa de atenção."
      },
      {
        image: warning,
        title: "Prevenção de maiores problemas",
        description: "Detecte pequenos problemas antes que se transformem em grandes despesas. Realizar o diagnóstico regular ajuda a manter o veículo em excelente estado e evita surpresas indesejadas."
      },
      {
        image: person,
        title: "Praticidade e conforto",
        description: "Tenha todo o suporte necessário para cuidar do seu veículo, direto do seu dispositivo. A plataforma é intuitiva e fácil de usar, garantindo que você tenha controle total, onde quer que esteja."
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
