import React from 'react';
import './App.css';
import Homepage from './components/Accueil';
import GridMenu from './components/GridMenu';

function App() {
	return (
		<div id='mainContainer'>
			<Homepage />
			<GridMenu />
		</div>
	);
}

export default App;
