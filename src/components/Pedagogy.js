import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import sepia_piano from '../img/sepia_piano.jpg'

export default class Pedagogy extends Component {
	render() {
		return (
			<Grid columns={2}>
				<Grid.Row style={{height: '200vh'}}>
					<Grid.Column>
						<Image src={sepia_piano} alt="Pedagogie" style={{height: '100%'}}/>
					</Grid.Column>
					<Grid.Column color='white'>
						<h3 id='title_story'>Ma pedagogie :</h3>
						<br/>
						<br/>
						<br/>
						<h3 id='subtitle_story'>Lorem ipsum blabla</h3>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<h3>Hey</h3>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<p>Hey</p>
				</Grid.Row>
				<Grid.Row>
					<p>Hey</p>
				</Grid.Row>
			</Grid>
		)
	}
}