import React, { PropTypes } from 'react'
import { Sound, asset, View } from 'react-vr'

const SkeletonSound = () =>
	<View >
		<Sound
			source={{
				wav: asset('snes_skele.wav'),
			}}
			loop
			volume={this.props.noise}
		/>
	</View>


SkeletonSound.propTypes = {
	noise: PropTypes.number,
}

export default SkeletonSound
