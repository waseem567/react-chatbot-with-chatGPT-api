import React from "react";
import "./Input.css";

const Input = () => {
	return (
		<div className="query-container">
			<input type="text" placeholder="Enter your query" className="query" />
		</div>
	);
};

export default Input;
