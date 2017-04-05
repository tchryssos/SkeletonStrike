import React from 'react'
import { Sound, asset, StyleSheet, View } from 'react-vr'

export default class SkeletonSound extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View >
        <Sound
          source={{
            wav: asset('snes_skele.wav')
          }}
          loop={true}
          volume={this.props.noise}
        />
      </View>
    )
  }
}
