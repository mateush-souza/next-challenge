// components/WatsonChat.tsx
"use client"
import { useEffect } from 'react';

interface WatsonAssistantInstance {
  render: () => Promise<void>;
  // Adicione outros métodos ou propriedades que você deseja usar
}

const WatsonChat = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "b189444e-771b-4db4-8e3d-ca748c534b6f", // O ID da integração.
      region: "au-syd", // A região onde sua integração está hospedada.
      serviceInstanceID: "a60974e2-ae9c-4c92-b53f-af031624f3ff", // O ID da sua instância de serviço.
      onLoad: async (instance: WatsonAssistantInstance) => { 
        await instance.render(); 
      }
    };

    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    script.async = true;

    document.head.appendChild(script);

    // Limpeza: remover o script se o componente for desmontado
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // Não renderiza nada, pois é um script de chat
};

export default WatsonChat;
