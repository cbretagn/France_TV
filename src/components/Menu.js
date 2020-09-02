import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'

export default class StickyMenu extends Component {
	state = { activeItem: 'Accueil' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
				<Segment inverted>
					<Menu inverted pointing secondary stackable>
						<Menu.Item
							name='Accueil'
							active={activeItem === 'Accueil'}
							onClick={this.handleItemClick}
						/>
						<Menu.Item
							name='Ma pedagogie'
							active={activeItem === 'Ma pedagogie'}
							onClick={this.handleItemClick}
						/>
						<Menu.Item
							name='Prestations'
							active={activeItem === 'Prestations'}
							onClick={this.handleItemClick}
						/>
						<Menu.Item
							name='Contact'
							active={activeItem === 'Contact'}
							onClick={this.handleItemClick}
						/>
					</Menu>
				</Segment>
		)
	}
}