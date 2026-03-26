import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export default function AIChat() {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const userMessage = input;
    setInput('');

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
      });
      setMessages(prev => [...prev, { role: 'ai', text: response.text || 'No response' }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Error: ' + e }]);
    }
  };

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-neutral-800 self-end' : 'bg-neutral-700 self-start'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className="flex-1 bg-neutral-900 border border-neutral-800 p-2 rounded-lg"
          placeholder="Ask ChronoLattice..."
        />
        <button onClick={sendMessage} className="bg-white text-black p-2 rounded-lg">Send</button>
      </div>
    </div>
  );
}
