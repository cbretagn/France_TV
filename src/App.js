import React from 'react';
import './App.css';
import StickyMenu from './components/Menu';
import Homepage from './components/Accueil';
import Pedagogy from './components/Pedagogy';

function App() {
	return (
		<div>
			<Homepage />
			<StickyMenu />
			<Pedagogy />
		</div>
	);
}

export default App;
