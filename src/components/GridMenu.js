import React, {Component, createRef} from 'react'
import {Sticky} from 'semantic-ui-react'
import MainGridText from './MainGridText';
import StickyMenu from './Menu';

export default class GridMenu extends Component{

	contextRef = createRef()
	render(){
		return (
			<div ref={this.contextRef}>
				<Sticky context={this.contextRef}>
					<StickyMenu attached="top" className = "truc"/>
				</Sticky>
				<MainGridText />
			</div>
		)
	}
}