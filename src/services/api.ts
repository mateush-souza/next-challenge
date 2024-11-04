import { getAPIClient, RegisterResponse, simulateRegister } from "./axios";

export const api = getAPIClient()

export const registerUser = async (data: { name: string; email: string; password: string }): Promise<RegisterResponse> => {
        const response = await simulateRegister(data);
        return response;
};

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
      const { placa, marca, tipoMotor, transmissao, cor, quilometragem, manutencaoRecente, observacoes } = req.body;

      res.status(200).json({ message: 'Veículo cadastrado com sucesso', data: req.body });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  }
