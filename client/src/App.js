import React from "react";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
	return (
		<div>
			<div>
				<Header />
			</div>
			<div className='codearea'>
				<Editor />
			</div>
		</div>
	);
};

export default App;
