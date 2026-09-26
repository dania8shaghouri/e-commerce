import { GoogleGenAI } from "@google/genai";

let client: GoogleGenAI | null = null;

const getGeminiClient = () => {
  if (!client) {
    client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });
  }
  return client;
};

interface GenerateDescriptionInput {
  title: string;
  brand?: string;
  category?: string;
  specs?: Record<string, unknown>;
}

export const generateProductDescription = async ({
  title,
  brand,
  category,
  specs,
}: GenerateDescriptionInput) => {
  const specLines = specs
    ? Object.entries(specs)
        .filter(([, value]) => value !== undefined && value !== "")
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ")
    : "";

  const prompt = `You are an expert e-commerce copywriter. Write a professional, concise product description (2-3 sentences) for the following product. Do not invent specs that aren't listed below.

Product: ${title}
Brand: ${brand ?? "Unknown"}
Category: ${category ?? "Unknown"}
Specifications: ${specLines || "None provided"}`;

  const response = await getGeminiClient().models.generateContent({
    model: process.env.GEMINI_MODEL || "gemini-2.0-flash",
    contents: prompt,
  });

  const description = response.text?.trim();

  if (!description) {
    throw new Error("No description generated");
  }

  return description;
};