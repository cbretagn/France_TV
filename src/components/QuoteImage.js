import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const QuoteImage = (props) => (
  <Reveal animated='small fade' style={{width: '100%', height: '100%', objectFit: 'cover'}}>
    <Reveal.Content visible style={{width: '100%', height: '100%', objectFit: 'cover'}}>
		<Image src={props.backgroundImg} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
    </Reveal.Content>
    <Reveal.Content hidden style={{width: '100%', height: '100%', objectFit: 'cover'}}>
		<Image src={props.backgroundImg} style={{width: '100%', height: '100%', objectFit: 'cover', opacity: '0.6'}}/>
      	<span id='quote'>{props.quoteText}</span>
		<span id='author'>{props.author}</span>
    </Reveal.Content>
  </Reveal>
)

export default QuoteImage