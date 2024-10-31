import Image from 'next/image';

import ilustration from '@/image/members/ilustration.png'

export default function Commitment() {
    return (
        <section className="bg-blue-50 px-8 py-16 flex items-center justify-center">
        <div className="flex gap-6 max-w-3xl">
          <div className="w-1/3">
            <Image
              src={ilustration}
              alt="Ilustração"
              width={150}
              height={150}
              className="w-full h-auto"
            />
          </div>
          <div className="w-2/3">
            <p className="text-4xl text-blue-500 font-bold mb-4">“</p>
            <p className="text-gray-700 text-lg font-medium mb-4">
              Nós, como grupo, nos comprometemos integralmente com a 
              <span className="text-blue-500"> concepção, construção e implementação </span>
              bem-sucedida da nossa plataforma de diagnóstico de veículos.
            </p>
            <p className="text-gray-700 text-lg font-medium">
              Reconhecemos a importância e o impacto significativo que essa plataforma terá na vida dos usuários, 
              fornecendo-lhes uma <span className="text-blue-500">solução inovadora e eficaz</span> para diagnosticar problemas em seus veículos.
            </p>
            <p className="text-4xl text-blue-500 font-bold mt-4 text-right">”</p>
          </div>
        </div>
      </section>
    )
}