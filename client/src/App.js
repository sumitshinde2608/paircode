import React from "react";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import "./App.css";
import Terminal from "./components/Terminal/Terminal";

const App = () => {
	return (
		<div className='App'>
			<div className='Header'>
				<Header />
			</div>

			<div className='codearea'>
				<div className='editor'>
					<Editor />
				</div>
				<div className='terminal'>
					<Terminal />
				</div>
			</div>
		</div>
	);
};

export default App;
