import "./App.css";
import Input from "./components/Input";
import Response from "./components/Response";

function App() {
	return (
		<div className="App">
			<div className="side-bar"></div>
			<div className="main-page">
				<Input />
				<Response />
				<Response />
			</div>
		</div>
	);
}

export default App;
