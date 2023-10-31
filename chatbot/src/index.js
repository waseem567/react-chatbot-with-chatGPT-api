import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Chatbot from "./Chatbot";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Chatbot />
	</React.StrictMode>
);

reportWebVitals();
