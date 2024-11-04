"use client";
import Image from 'next/image'
import featuresImg from '@/image/home/features.png'

export default function Features() {
    return (
        <section className="p-10">
            <h2 className="text-blue-500 text-xl font-semibold">Funcionalidades</h2>
            <p className="text-gray-500 mt-2 mb-8">
            Explore as funcionalidades que tornam o AutoCheckup uma ferramenta essencial para o cuidado com seu veículo. Desde a identificação de problemas até o agendamento de reparos, nossa plataforma oferece uma experiência completa e intuitiva para que você tenha total controle sobre a manutenção do seu carro.
            </p>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-16 bg-blue-100 flex flex-col justify-center">
                    <h3 className="text-blue-600 text-2xl font-bold mb-4">
                        Descrição da AutoCheckup
                    </h3>
                    <p className="text-gray-600">
                    Experimente a praticidade e segurança de diagnosticar seu veículo onde estiver. Nossa plataforma foi criada para facilitar a vida do motorista moderno, permitindo diagnósticos rápidos e eficientes, sem complicações.
                    </p>
                </div>

                <div className="md:w-1/2">
                    <Image
                        src={featuresImg}
                        alt="Imagem de uma pessoa dirigindo"
                        layout="responsive"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}