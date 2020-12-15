import React from 'react'

const TextBox = (props) => (
	<div>
		<h3 class="titleBox"><b>{props.titleBox}</b></h3>
		<br />
		<hr class="rounded"/>
		<br />
		<br />
		<br />
		<br />
		{props.paragraphBox}
	</div>
)
  
export default TextBox