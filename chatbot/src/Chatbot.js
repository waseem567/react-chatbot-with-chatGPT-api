
import React, {useState} from "react";
import "./App.css";
import Loader from "./components/Loader";


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
        fetch(process.env.REACT_APP_CHAT_GPT_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
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
