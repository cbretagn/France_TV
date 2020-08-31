import React, { Component } from 'react'
import inside_piano from "../img/inside_piano.jpg"
import piano_chords from "../img/piano_chords.jpg"
import chords_piano from "../img/chords_piano_redish.jpg"
import teacher_student from "../img/teacher_student_piano.jpg"
import { Image, Button } from 'semantic-ui-react'

export default class Homepage extends Component {
	render() {
		return (
			<div class="landing">
				<Image src={chords_piano} alt="piano_chords" class="landingImage" style={{height: '100vh', width: '100%', 'object-fit': 'cover', opacity: 0.5}}/>
				<h1 id='title'>
					France Vezina
					<br />
					<span id='subtitle'>Clavecin, Piano et Basse Continue
					<br />
					Pour enfants, ados et adultes, a Montpellier ou en ligne
					</span>
				</h1>
				<button style={{position: 'absolute', top: '75%', left: '50%', translate: '-50%, -75%', color: 'red', width: '20vw', height: '5vh'}}>Decouvrir</button>
			</div>
		)
	}
}