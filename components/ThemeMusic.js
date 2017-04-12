import React, { PropTypes } from 'react'
import { Sound, asset } from 'react-vr'

export default class ThemeMusic extends React.Component {

	get volume() {
		if (!this.props.victory) {
			return 1
		}
		return 0
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

ThemeMusic.propTypes = {
	victory: PropTypes.bool,
}
