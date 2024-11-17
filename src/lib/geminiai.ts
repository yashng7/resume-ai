import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(apiKey || "");

export default genAI;
