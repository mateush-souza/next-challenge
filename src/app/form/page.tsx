"use client"
import Image from 'next/image';

import formImg from '@/image/form/form.png'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Form() {
    const [vehicleData, setVehicleData] = useState({
        placa: '',
        possuiPlaca: false,
        marca: '',
        tipoMotor: '',
        transmissao: '',
        cor: '',
        quilometragem: '',
        desconheceQuilometragem: false,
        manutencaoRecente: '',
        semManutencaoRecente: false,
        observacoes: '',
        concordaTermos: false,
      });
    
      const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setVehicleData((prev) => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        if (!vehicleData.marca || !vehicleData.tipoMotor || !vehicleData.transmissao || !vehicleData.cor || !vehicleData.concordaTermos) {
          alert('Por favor, preencha todos os campos obrigatórios e aceite os Termos de Uso.');
          return;
        }
    
        try {
          const response = await fetch('/api/vehicle', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(vehicleData),
          });
    
          if (response.ok) {
            const data = await response.json();
            alert('Veículo cadastrado com sucesso!');
            console.log('Dados enviados:', data);
          } else {
            console.error('Erro ao enviar dados:', response.statusText);
          }
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="mt-8 mb-8 bg-white shadow-md rounded-lg p-8 max-w-4xl w-full">
                <button className="text-blue-500 mb-4 text-sm font-medium"><Link href={'/dashboard'}>← Voltar</Link></button>

                <div className="flex gap-8">
                    <div className="w-1/3">
                        <Image
                            src={formImg} // Substitua pelo caminho da imagem
                            alt="Pessoa dirigindo"
                            width={320}
                            height={180}
                            className="rounded-md"
                        />
                    </div>

                    <div className="w-2/3">
                        <h2 className="text-2xl font-bold text-gray-800">Informações do veículo</h2>
                        <p className="text-gray-500 mb-6">Informe os dados do seu veículo para cadastro</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Digite a placa do veículo</label>
                                <input
                                    type="text"
                                    name="placa"
                                    placeholder="Digite a placa do veículo"
                                    value={vehicleData.placa}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        name="possuiPlaca"
                                        checked={vehicleData.possuiPlaca}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="possuiPlaca" className="text-gray-500 text-sm">Não sei nem possuo a placa do veículo</label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700">Marca do veículo *</label>
                                <input
                                    type="text"
                                    name="marca"
                                    value={vehicleData.marca}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Tipo de Motor (gasolina, diesel, híbrido, elétrico, etc.) *</label>
                                <input
                                    type="text"
                                    name="tipoMotor"
                                    value={vehicleData.tipoMotor}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Transmissão (Manual, Automático) *</label>
                                <input
                                    type="text"
                                    name="transmissao"
                                    value={vehicleData.transmissao}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Cor *</label>
                                <input
                                    type="text"
                                    name="cor"
                                    value={vehicleData.cor}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Quilometragem atual</label>
                                <input
                                    type="text"
                                    name="quilometragem"
                                    value={vehicleData.quilometragem}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        name="desconheceQuilometragem"
                                        checked={vehicleData.desconheceQuilometragem}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="desconheceQuilometragem" className="text-gray-500 text-sm">Não sei exatamente a quilometragem</label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700">Manutenção recente</label>
                                <input
                                    type="text"
                                    name="manutencaoRecente"
                                    placeholder="Adicionar manutenção"
                                    value={vehicleData.manutencaoRecente}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        name="semManutencaoRecente"
                                        checked={vehicleData.semManutencaoRecente}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="semManutencaoRecente" className="text-gray-500 text-sm">Não possui manutenções recentes</label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700">Observações</label>
                                <textarea
                                    name="observacoes"
                                    value={vehicleData.observacoes}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 mt-1"
                                ></textarea>
                            </div>

                            <div className="flex items-center mt-4">
                                <input
                                    type="checkbox"
                                    name="concordaTermos"
                                    checked={vehicleData.concordaTermos}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="concordaTermos" className="text-gray-500 text-sm">
                                    Concordo com os <a href="#" className="text-blue-500 underline">Termos de Uso</a>
                                </label>
                            </div>

                            <p className="text-gray-500 text-sm mt-4">Preencha os dados de cadastro do seu veículo corretamente para continuar.</p>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-md mt-4"
                            >
                                Cadastrar
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}