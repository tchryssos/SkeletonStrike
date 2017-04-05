import React from 'react'
import { Sound, asset } from 'react-vr'

export default class ThemeMusic extends React.Component {

	constructor(props) {
		super(props)
	}

	get volume() {
		if (!this.props.victory) {
			return 1
		} else {
			return 0
		}
	}

	render() {
		return (
			<Sound
				source={{
					mp3: asset('spooky.mp3'),
				}}
				loop
				volume={this.volume}
			/>
    )
	}
}
