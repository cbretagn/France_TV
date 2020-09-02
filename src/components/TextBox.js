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
		<p class="paragraphBox">{props.paragraphBox1}</p>
		<p class="paragraphBox">{props.paragraphBox2}</p>
		<p class="paragraphBox">{props.paragraphBox3}</p>
		<p class="paragraphBox">{props.paragraphBox4}</p>
		<br />
		<br />
		<br />
		<br />
	</div>
)
  
export default TextBox