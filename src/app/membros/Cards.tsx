import Image from 'next/image';

import cauanImg from '@/image/members/cauan.png'
import mateusImg from '@/image/members/mateus.png'
import lucasImg from '@/image/members/lucas.png'

export default function Cards(){
    const participants = [
        {
          name: 'Cauan Aranega S Passos',
          rm: 'RM555466',
          imageSrc: cauanImg,
        },
        {
          name: 'Mateus Henrique de Souza',
          rm: 'RM558424',
          imageSrc: mateusImg,
        },
        {
          name: 'Lucas de Assis Fialho',
          rm: 'RM557884',
          imageSrc: lucasImg,
        },
      ];
    return (
        <section className="text-center px-8 py-12">
        <h2 className="text-2xl font-bold text-blue-500">Participantes</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum
        </p>
        <div className="flex justify-center gap-8 mt-8">
          {participants.map((participant) => (
            <div key={participant.rm} className="text-center">
              <Image
                src={participant.imageSrc}
                alt={participant.name}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <p className="mt-4 font-semibold">{participant.name}</p>
              <p className="text-gray-500">{participant.rm}</p>
            </div>
          ))}
        </div>
      </section>
    );
}