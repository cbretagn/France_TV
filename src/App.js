import React from 'react';
import './App.css';
import Homepage from './components/Accueil';
import MainGridText from './components/MainGridText';
import StickyMenu from './components/Menu';

function App() {
	return (
		<div id='mainContainer'>
			<Homepage />
			<MainGridText />
		</div>
	);
}

export default App;
