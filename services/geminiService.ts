import { GoogleGenAI } from "@google/genai";
import { FAQ_CONTEXT } from '../constants';

// Initialize client with API key from environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (userMessage: string, history: {role: string, parts: string[]}[]): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
        return "Maaf, sistem AI sedang dalam perbaikan (API Key missing). Silakan hubungi admin via WhatsApp.";
    }

    const model = 'gemini-2.5-flash';
    
    // Using generateContent with thinkingBudget 0 to ensure lowest latency for simple FAQ interactions
    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: FAQ_CONTEXT,
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    if (response.text) {
        return response.text;
    }
    return "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi server AI. Silakan coba lagi nanti.";
  }
};