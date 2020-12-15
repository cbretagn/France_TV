import React, { Component } from 'react'
import inside_piano from "../img/inside_piano.jpg"
import piano_chords from "../img/piano_chords.jpg"
import chords_piano from "../img/chords_piano_redish.jpg"
import teacher_student from "../img/teacher_student_piano.jpg"
import { Image, Button, Icon } from 'semantic-ui-react'

export default class Homepage extends Component {
	render() {
		return (
			<div class="landing">
				<Image src={chords_piano} alt="piano_chords" style={{height: '100%', width: '100%', objectFit: 'cover', opacity: 0.5, margin: 0, padding: 0}}/>
				<h1 id='title'>
					France Vezina
					<br />
					<br />
					<br />
					<span id='subtitle'>Clavecin, Piano et Basse Continue
					<br />
					Pour enfants, ados et adultes, a Montpellier ou en ligne
					</span>
				</h1>
				<Button animated circular style={{position: 'absolute', top: '80%', left: '45%', translate: '-80%, -45%', color: 'white', 
				backgroundColor: "#4c0613",  opacity: "1",
				width: '10vw', height: '8vh', fontSize: "1.5em", fontColor: "black"}}>
					<Button.Content visible>
						Decouvrir
					</Button.Content>
					<Button.Content hidden>
						<Icon name="arrow down" />
					</Button.Content>
				</Button>
			</div>
		)
	}
}