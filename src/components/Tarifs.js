import React, { Component } from 'react'
import { Card, Grid, Icon, Button} from 'semantic-ui-react'
import child_hand_piano from '../img/child_hand_piano.jpg'

const Tarifs = () => (
	<Card.Group stackable itemsPerRow={4} style = {{fontSize : "2rem", paddingLeft : "3vw", paddingRight : "3vw", width: "100%"}}>
		<Card link style = {{marginTop : "3vw", marginBottom: "3vw", opacity : "0.8"}}>
        	<Card.Content className="tarifs">
				<Card.Header>Cours a l'unite</Card.Header>
				<hr class="tarifDivider"></hr>
				<Grid columns={2} style = {{marginTop : "3vw"}}>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							1 h
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							32
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							45 mn
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							25
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							30 mn
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							17
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
				</Grid>
        	</Card.Content>
      	</Card>
		  <Card link style = {{marginTop : "3vw", marginBottom: "3vw", opacity : "0.8"}}>
        	<Card.Content>
				<Card.Header>Carte de 10 cours</Card.Header>
				<hr class="tarifDivider"></hr>
				<Grid columns={2} style = {{marginTop : "3vw"}}>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							1 h
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							290
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							45 mn
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							225
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							30 mn
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							150
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
				</Grid>
        	</Card.Content>
      	</Card>
		  <Card link style = {{marginTop : "3vw", marginBottom: "3vw", opacity : "0.8"}}>
        	<Card.Content>
				<Card.Header>Cours a l'annee</Card.Header>
				<hr class="tarifDivider"></hr>
				<Grid columns={2} style = {{marginTop : "3vw"}}>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							1 h
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							770
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							45 mn
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							600
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							30 mn
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							415
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
				</Grid>
        	</Card.Content>
      	</Card>
		  <Card link style = {{marginTop : "3vw", marginBottom: "3vw", opacity : "0.8"}}>
        	<Card.Content>
				<Card.Header>Cours collectifs de formation musicale</Card.Header>
				<hr class="tarifDivider"></hr>
				<Grid columns={2} style = {{marginTop : "3vw"}}>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							1 h
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							32
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							45 mn
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							25
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row style = {{paddingTop : "2vw", paddingBottom : "2vw"}}>
						<Grid.Column style = {{textAlign: "left"}}>
							<Icon name="clock outline" />
							30 mn
						</Grid.Column>
						<Grid.Column style = {{textAlign: "right"}}>
							17
							<Icon name="euro sign" />
						</Grid.Column>
					</Grid.Row>
				</Grid>
        	</Card.Content>
      	</Card>
  	</Card.Group>
)

export default Tarifs