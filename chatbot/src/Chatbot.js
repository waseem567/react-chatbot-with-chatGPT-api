
import React, {useState} from "react";
import "./App.css";
import Loader from "./components/Loader";
const apiKey = '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'; 
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const Chatbot = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [showText, setShowText] = useState(false);
    const chatBotHandler = () => {
        setLoading(true);
        const requestData = {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: query }],
            temperature: 0.7,
          };
        fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(requestData),
          })
            .then(response => response.json())
            .then(data => {
				setResponse(()=> data.choices[0].message.content);
            	setLoading(false);
				setShowText(true);
            })
            .catch(error => {
              console.error('Error:', error);
            });
    };
    
   
  return (
    
      <div className="chat-bot-wrapper">
        <h2>CHAT BOT</h2>
        
        <div className="input-box">
        <input value={query} onChange={(e) => setQuery(e.target.value)} className="question" type="text" placeholder="What you want to ask?" />
        <button type="button" onClick={chatBotHandler}>submit!</button>
        </div>
        {loading && <Loader />}
        {showText && <div className="chat-wrapper">{response}</div>}
        
      </div>   
   
  );
};

export default Chatbot;
