import React, { PropTypes } from 'react'
import { Sound, asset, View } from 'react-vr'

export default class SkeletonSound extends React.Component {
	render() {
		return (
			<View>
				<Sound
					source={{
						wav: asset('snes_skele.wav'),
					}}
					loop
					volume={this.props.noise}
				/>
			</View>
		)
	}
}


SkeletonSound.propTypes = {
	noise: PropTypes.number,
}
