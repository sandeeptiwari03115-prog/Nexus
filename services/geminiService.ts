import { GoogleGenAI } from "@google/genai";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    // Only initialize if key is present
    if (process.env.API_KEY) {
      client = new GoogleGenAI({ apiKey: process.env.API_KEY });
    } else {
      console.warn("API_KEY not found in environment variables. Gemini features will use mock data.");
    }
  }
  return client;
};

export const generateMarketingHeadline = async (topic: string): Promise<string> => {
  const ai = getClient();
  
  if (!ai) {
    // Fallback if no API key
    await new Promise(resolve => setTimeout(resolve, 1500));
    return `Revolutionize Your ${topic} with Nexus Strategies.`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a punchy, high-converting digital marketing headline (maximum 10 words) about: ${topic}. strict tone: professional, exciting.`,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Gemini generation error:", error);
    return `Elevate Your ${topic} with Expert Guidance.`;
  }
};
