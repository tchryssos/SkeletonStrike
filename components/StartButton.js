import React from 'react'
import { VrButton, View, Text, StyleSheet, VrSoundEffects, asset } from 'react-vr'

export default class StartButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			opacity: 1,
		}
		this.startClick = this.startClick.bind(this)

		this.styles = StyleSheet.create({
			inFront: {
				transform: [{ translate: [-0.5, 0.5, -2] }],
			},
		})

		this.menuSound = asset('menu chime.wav')
	}

	componentWillMount() {
		VrSoundEffects.load(this.menuSound)
	}

	startClick() {
		if (!this.props.started) {
			this.setState({
				opacity: 0,
			})
			this.props.startGame()
			VrSoundEffects.play(this.menuSound)
		}
	}

	render() {
		return (
			<View
				style={[this.styles.inFront, { opacity: this.state.opacity }]}
			>
				<VrButton
					style={{
						width: 1,
						height: 0.15,
						backgroundColor: 'black',
					}}
					onClick={() => this.startClick()}
				>
					<Text
						style={{
							color: 'red',
							textAlign: 'center',
						}}
					>
            SKELETON STRIKE!
          </Text>
				</VrButton>
			</View>
    )
	}
}
