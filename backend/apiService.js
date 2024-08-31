require("dotenv").config();
const axios = require("axios");
const anthropicApi = axios.create({
  baseURL: "https://api.anthropic.com/v1",
  headers: {
    "Authorization": `Bearer ${process.env.ANTHROPIC_API_KEY}`,
    "Content-Type": "application/json"
  }
});
const openaiApi = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Authorization": `Bearer {process.env.OPENAI_API_KEY}`,
    "Content-Type": "application/json"
  }
});

async function getAnthropicResponse(prompt) {
  try {
    const response = await anthropicApi.post("/completions", {
      model: "claude-2",
      prompt: prompt,
      max_tokens_to_sample: 300
    });
    return response.data.completion;
  } catch (error) {
    console.error("Error calling Anthropic API:", error);
    throw error;
  }
}

async function searchInternet(query) {
  try {
    const response = await openaiApi.post("/engines/davinci-codex/completions", {
      prompt: `Search the internet for: ${query}`,
      max_tokens: 100
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}

module.exports = { getAnthropicResponse, searchInternet };
