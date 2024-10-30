import { getAPIClient, RegisterResponse, simulateRegister } from "./axios";

export const api = getAPIClient()

export const registerUser = async (data: { name: string; email: string; password: string }): Promise<RegisterResponse> => {
    try {
        const response = await simulateRegister(data);
        return response;
    } catch (error) {
        throw error; 
    }
};
