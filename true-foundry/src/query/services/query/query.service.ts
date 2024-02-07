import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';
config();

@Injectable()
export class QueryService {
  async fetchText(Prompt): Promise<any> {
    const payload = {
      "contents": [
        {
          "parts": [
            Prompt
          ]
        }
      ]
    }
    const url=`${process.env.URL}:generateContent?key=${process.env.SECRET_KEY}`;
    const response = await axios.post(url, payload);
    let text = JSON.stringify(response.data["candidates"][0]["content"]["parts"][0]["text"]);
    return text;
  }
  async fetchToken(Prompt): Promise<any> {
    const payload = {
      "contents": [
        {
          "parts": [
            Prompt
          ]
        }
      ]
    }
    const url=`${process.env.URL}:countTokens?key=${process.env.SECRET_KEY}`;
    const response = await axios.post(url, payload);
    const token = JSON.stringify(response.data["totalTokens"]);
    return token;
  }

  async fetchResponse(reqPrompt): Promise<any> {
    try {
      const inputPrompt = {
        "text": reqPrompt
      }
      const start = new Date().getTime();
      const text = await this.fetchText(inputPrompt);

      const inputToken = await this.fetchToken(inputPrompt);
      const outputPrompt = {
        "text": text
      }
      const outputToken = await this.fetchToken(outputPrompt);
      const end = new Date().getTime();
      const timeTaken = end - start;
      
      const finalResponse = {
        "text": text,
        "inputToken": inputToken,
        "outputToken": outputToken,
        "timeTaken": timeTaken,
        "createdAt": start
      }
      return finalResponse;
    } catch (error) {
      console.error('Error fetching data from API');
    }
  }
}
