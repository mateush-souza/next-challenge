
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/'
});

export async function loginUser(data: { email: string; password: string }) {
  try {
    // Ajuste aqui para usar GET com os parâmetros no URL
    const response = await api.get('/login', {
      params: {
        email: data.email,
        password: data.password,
      },
    });

    // Supondo que a API retorna um array de usuários
    const users = response.data; // A resposta é um array de usuários
    const user = users.find((user: { email: string }) => user.email === data.email);

    if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    // Aqui você pode gerar um token fictício ou obter um token real da sua API
    const token = `token_for_user_${user.id}`; // Token fictício baseado no ID do usuário

    return { token, email: user.email };
  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
}


export async function registerUser(data: { name: string; email: string; password: string }) {
  try {
    const response = await api.post('usuario/registro', data);
    return response.data;
  } catch (error) {
    console.error("Erro no cadastro:", error);
    console.log(data)
    throw error;
  }
}

export default api;
