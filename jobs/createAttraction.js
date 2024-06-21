const { OpenAI } = require("openai");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateDescription(attraction) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a tour guide speaking." },
        {
          role: "user",
          content: `Tell me about the tourist attraction ${attraction.name} in ${attraction.city}, ${attraction.state}, including interesting stories and history.`,
        },
      ],
      max_tokens: 1000,
    });
    console.log("Response from OpenAI:", response.choices);
    return response;
  } catch (error) {
    console.error("Error generating description:", error);
    return null;
  }
}

async function textToSpeach(text, attraction) {
  const speechFile = path.resolve(`../audio_files/${attraction.name}.mp3`);
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: text,
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}

module.exports = { generateDescription, textToSpeach };
