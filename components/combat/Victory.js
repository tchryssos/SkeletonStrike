import React, { PropTypes } from 'react'
import { Text, asset, Sound, View } from 'react-vr'

export default class Victory extends React.Component {

	render() {
		if (this.props.victory) {
			return (
				<View
					style={{
						transform: [{ translate: [-15, 3, -30] }],
					}}
				>
					<Text
						style={{
							fontSize: 10,
							color: 'yellow',
							textAlign: 'center',
						}}
					>
						YOU WIN!
						<Sound
							source={{
								wav: asset('victory.wav'),
							}}
						/>
					</Text>
				</View>
			)
		}
		return null
	}
}

Victory.propTypes = {
	victory: PropTypes.bool,
}
