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
				<Grid.Row style={{paddingBottom: '0'}}>
					<Grid.Column style={{ padding: '0', background: 'black'}}>
						<QuoteImage backgroundImg={teacher_student} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>
					</Grid.Column>
					<Grid.Column style={{paddingLeft: '5em', paddingTop: '5em', paddingRight: '5em', paddingBottom: '5em'}}>
						<TextBox titleBox="Qui suis-je ?" paragraphBox1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox4=""></TextBox>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{paddingBottom: '0', paddingTop: '0'}}>
				<Grid.Column style={{paddingLeft: '5em', paddingTop: '5em', paddingRight: '5em', paddingBottom: '5em'}}>
						<TextBox titleBox="Ma pedagogie" paragraphBox1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox3=""
						paragraphBox4=""></TextBox>
					</Grid.Column>
					<Grid.Column style={{ padding: '0', background: 'black'}}>
						<QuoteImage backgroundImg={child_hand_piano} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>	
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{paddingBottom: '0', paddingTop: '0'}}>
					<Grid.Column style={{ padding: '0', background: 'black'}}>
						<QuoteImage backgroundImg={sepia_piano} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>
					</Grid.Column>
					<Grid.Column style={{paddingLeft: '5em', paddingTop: '5em', paddingRight: '5em', paddingBottom: '5em'}}>
						<TextBox titleBox="Cours en presentiel" paragraphBox1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox4=""></TextBox>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{paddingBottom: '0', paddingTop: '0'}}>
				<Grid.Column style={{paddingLeft: '5em', paddingTop: '5em', paddingRight: '5em', paddingBottom: '5em'}}>
						<TextBox titleBox="Cours en ligne" paragraphBox1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox4=""></TextBox>
					</Grid.Column>
					<Grid.Column style={{ padding: '0', background: 'black'}}>
						<QuoteImage backgroundImg={music_sheet} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>	
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{paddingBottom: '0', paddingTop: '0'}}>
					<Grid.Column style={{ padding: '0', background: 'black'}}>
						<QuoteImage backgroundImg={wing_piano} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>
					</Grid.Column>
					<Grid.Column style={{paddingLeft: '5em', paddingTop: '5em', paddingRight: '5em', paddingBottom: '5em'}}>
						<TextBox titleBox="Tarifs" paragraphBox1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
						et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa 
						qui officia deserunt mollit anim id est laborum."
						paragraphBox4=""></TextBox>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row column={1}>
					<QuoteImage backgroundImg={music_sheet}></QuoteImage>
				</Grid.Row>
			</Grid>
		)
	}
}