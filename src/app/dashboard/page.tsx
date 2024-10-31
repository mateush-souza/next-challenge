"use client"
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import { parseCookies } from "nookies";
import { api } from "@/services/api";

//Images
import card1 from '@/image/dashboard/boneco1.png'
import card2 from '@/image/dashboard/boneco2.png'
import card3 from '@/image/dashboard/boneco3.png'
import card4 from '@/image/dashboard/map.png'
import card5 from '@/image/dashboard/calendar.png'
import card6 from '@/image/dashboard/note.png'

const cards = [
    {
        title: "Fazer diagnóstico",
        description: "Lorem ipsum dolor sit amet consectetur.",
        imgSrc: card1
    },
    {
        title: "Consultar diagnósticos",
        description: "Lorem ipsum dolor sit amet consectetur.",
        imgSrc: card2
    },
    {
        title: "Orçamentos",
        description: "Lorem ipsum dolor sit amet consectetur.",
        imgSrc: card3
    },
    {
        title: "Centro Automotivos",
        description: "Lorem ipsum dolor sit amet consectetur.",
        imgSrc: card4
    },
    {
        title: "Agendamentos de reparos",
        description: "Lorem ipsum dolor sit amet consectetur.",
        imgSrc: card5
    },
    {
        title: "Histórico de reparos",
        description: "Lorem ipsum dolor sit amet consectetur.",
        imgSrc: card6
    }
];

export default function Dashboard() {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        const { 'challenge.token': token } = parseCookies();

        if (!token) {
            router.push('/');
        } else {
            api.get('/dashboard');
        }
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-blue-600">Olá {user?.name}, bem vindo(a) de volta!</h1>
                <p className="text-gray-500">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {cards.map((card, index) => (
                    <div key={index} className="p-6 border rounded-lg shadow-lg flex flex-col items-center">
                        <Image src={card.imgSrc} alt={card.title} className="w-16 h-16 mb-4" />
                        <h2 className="text-lg font-semibold text-blue-700 mb-2 text-center">{card.title}</h2>
                        <p className="text-gray-500 text-center">{card.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-blue-800 text-white p-6 rounded-lg flex items-center">
                <div className="flex-1">
                    <h2 className="text-xl font-bold">Seja um assegurado Porto</h2>
                    <p className="text-white mt-2">
                        Lorem ipsum dolor sit amet consectetur. Elitmentum odio lorem consectetur a velit tortor adipiscing turpis morbi.
                    </p>
                </div>
                <button className="bg-white text-blue-800 px-4 py-2 font-bold rounded-lg ml-4">
                    Ver detalhes
                </button>
            </div>
        </div>
    );
}
