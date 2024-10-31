"use client";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { registerUser } from "@/services/api";
import { RegisterResponse } from '@/services/axios';

export default function Register() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    async function handleRegister(data: any) {
        try {
            const response: RegisterResponse = await registerUser(data);
            console.log(response.message);
            router.push('/');
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
        }
    }

    return (
        <div className="flex h-[100vh] min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                    <button
                        className="text-blue-500 flex items-center mb-4"
                    >
                        <FiArrowLeft className="mr-2" />
                        <Link href={'/'}>Voltar</Link>
                    </button>
                    <h2 className="text-2xl font-bold">Crie sua conta</h2>
                    <p className="text-gray-500 mb-6">Preencha seus dados de acesso para continuar.</p>

                    <form className="space-y-4" onSubmit={handleSubmit(handleRegister)} >
                        <input
                            {...register('name')}
                            id="name"
                            name="name"
                            type="name"
                            placeholder='Nome'
                            required
                            autoComplete="name"
                            className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            {...register('email')}
                            id="email"
                            name="email"
                            type="email"
                            placeholder='Email'
                            required
                            autoComplete="email"
                            className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            {...register('password')}
                            id="password"
                            name="password"
                            type="password"
                            placeholder='Senha'
                            required
                            className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center p-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
                        >
                            Cadastrar
                            <FiArrowRight className="ml-2" />
                        </button>
                    </form>

                    <p className="text-center text-gray-500 mt-6">
                        Já tem conta? <Link href={'/login'}><span className='text-blue-500'>Faça Login</span></Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
