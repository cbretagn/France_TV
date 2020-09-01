import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const QuoteImage = (props) => (
  <Reveal animated='small fade'>
    <Reveal.Content visible>
		<Image src={props.backgroundImg} />
    </Reveal.Content>
    <Reveal.Content hidden>
		<Image src={props.backgroundImg} style={{width: '100%', height: '100%', objectFit: 'cover', opacity: '0.7'}}/>
      	<span id='quote'>{props.quoteText}</span>
		<span id='author'>{props.author}</span>
    </Reveal.Content>
  </Reveal>
)

export default QuoteImage