import React, { PropTypes } from 'react'
import { View, StyleSheet } from 'react-vr'
import Skeleton from './Skeleton'

export default class Combat extends React.Component {
	constructor(props) {
		super(props)

		this.styles = StyleSheet.create({
			left: {
				transform: [{ translate: [-3, 1, 1.2] }, { rotateY: '110deg' }],
			},
			right: {
				transform: [{ translate: [3, 2, 0.1] }, { rotateY: '90deg' }],
			},
		})

		this.state = {
			skeletons: 2,
		}
		this.skeletonKill = this.skeletonKill.bind(this)
	}

	skeletonKill() {
		if (this.state.skeletons > 1) {
			this.setState({
				skeletons: this.state.skeletons - 1,
			})
		} else {
			this.props.winGame()
		}
	}

	get skeletonSpawn() {
		return (
			<View>
				<Skeleton location={this.styles.left} death={this.skeletonKill} />
				<Skeleton location={this.styles.right} death={this.skeletonKill} />
			</View>
		)
	}

	render() {
		if (this.props.started) {
			return (
				<View>
					{this.skeletonSpawn}
				</View>
			)
		}
		return null
	}
}

Combat.propTypes = {
	winGame: PropTypes.func,
	started: PropTypes.bool,
}
