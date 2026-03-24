import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

export const generateCaption = async (imageValue,base64Image) => {

    try {
    if(!imageValue){
     return alert ("image not found")
    }

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        config: {
      systemInstruction: `You are an AI assistant that generates engaging social media captions.

      Your task:
      - Analyze the given image
      - Generate a short, catchy Instagram-style caption
      - Keep it human-like and engaging
      - Add 2-4 relevant hashtags
      - Use emojis when appropriate
      
      Rules:
      - Do not describe like a robot
      - Do not be too long (max 2 lines)
      - Keep it natural and relatable,`
    },
       contents: [
            {
              role: "user",
              parts: [
                {
                  inlineData: {
                    mimeType: imageValue.mimetype,
                    data: base64Image,
                  },
                },
                {
                  text: "Generate a short Instagram-style caption for this image",
                },
              ],
            },
          ],
      });
      console.log(response.text);
      return response;
      
    } catch (error) {
      console.log("error",error)
    }
}

