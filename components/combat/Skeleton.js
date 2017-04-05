import React from 'react'
import { Image, asset, VrSoundEffects } from 'react-vr'
import SkeletonSound from './SkeletonSound'

export default class Skeleton extends React.Component {
  constructor(props){
    super(props)
    this.attack = this.attack.bind(this)
    this.strike = asset('hit.wav')

    this.state = {
      health: 10,
      opacity: 1,
    }
  }

  componentWillMount() {
    VrSoundEffects.load(this.strike)
  }

  attack() {
    VrSoundEffects.play(this.strike)
    this.setState({
      health: this.state.health-1
    })
    if (this.state.health < 3) {
      this.setState({
        opacity: 0,
        noise: 0,
      })
      this.props.death()
    }
  }

  render() {
    return(
      <Image
        style={[
          {
            height: 1.6,
            width: .66,
            opacity: this.state.opacity,
          },
          this.props.location,
        ]}
        source={asset('skeleton.png')}
        onEnter={this.attack}
        >
        <SkeletonSound noise={this.state.noise}/>
      </Image>
    )
  }
}
