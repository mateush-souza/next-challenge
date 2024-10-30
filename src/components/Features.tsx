"use client";
import Image from 'next/image'
import featuresImg from '@/image/home/features.png'

export default function Features() {
    return (
        <section className="p-10">
            <h2 className="text-blue-500 text-xl font-semibold">Funcionalidades</h2>
            <p className="text-gray-500 mt-2 mb-8">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
            </p>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-16 bg-blue-100 flex flex-col justify-center">
                    <h3 className="text-blue-600 text-2xl font-bold mb-4">
                        Lorem ipsum dolor sit amet consectetur.
                    </h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur. Elementum odio porta consectetur a velit tortor adipiscing turpis
                        montes. Auctor viverra luctus neque quam. Faucibus erat risus morbi eleifend malesuada eget nisl est.
                        Sagittis nunc mauris malesuada sed.
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