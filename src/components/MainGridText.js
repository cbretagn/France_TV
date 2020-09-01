import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import sepia_piano from '../img/sepia_piano.jpg'
import dirty_piano from '../img/dirty_piano.jpg'
import harpsichord from '../img/harpsichord.jpg'
import music_sheet from '../img/music_sheet.jpg'
import wing_piano from '../img/wing_piano.jpg'
import child_hand_piano from '../img/child_hand_piano.jpg'
import teacher_student from '../img/teacher_student_piano.jpg'
import construction_piano from '../img/construction_piano.jpg'
import hands_on_piano from '../img/hands_on_piano.jpg'
import QuoteImage from './QuoteImage'
import TextBox from './TextBox'

export default class MainGridText extends Component {
	render() {
		return (
			<Grid stackable columns={2}>
				<Grid.Row>
					<Grid.Column style={{ padding: '0'}}>
						<QuoteImage backgroundImg={teacher_student} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>
					</Grid.Column>
					<Grid.Column>
						<TextBox titleBox="Qui suis-je ?" paragraphBox="Lorem ipsum"></TextBox>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						Hey
					</Grid.Column>
					<Grid.Column style={{ padding: '0'}}>
						<QuoteImage backgroundImg={child_hand_piano} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>	
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column style={{ padding: '0'}}>
						<QuoteImage backgroundImg={sepia_piano} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>
					</Grid.Column>
					<Grid.Column>
						Hey
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						Hey
					</Grid.Column>
					<Grid.Column style={{ padding: '0'}}>
						<QuoteImage backgroundImg={music_sheet} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>	
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column style={{ padding: '0'}}>
						<QuoteImage backgroundImg={wing_piano} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>
					</Grid.Column>
					<Grid.Column>
						Hey
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}