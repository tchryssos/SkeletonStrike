import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

import StartButton from './components/StartButton'
import ThemeMusic from './components/ThemeMusic'
import Combat from './components/combat/Combat'
import Victory from './components/combat/Victory'

export default class SkeletonStrike extends React.Component {

  constructor(){
    super()
    this.state={
      started: false,
      victory: false,
    }
    this.startGame = this.startGame.bind(this)
    this.winGame = this.winGame.bind(this)

    this.styles = StyleSheet.create({
      inFront: {
        transform: [{translate: [-0.5, 0.5, -2]}]
      }
    })
  }

  startGame() {
    this.setState({started: true})
  }

  winGame() {
    this.setState({victory: true})
  }

  render() {
    return (
      <View>
        <ThemeMusic victory={this.state.victory}/>
        <Pano source={asset('castle.png')} />
        <StartButton started={this.state.started} startGame={this.startGame}/>
        <Combat started={this.state.started} winGame={this.winGame}/>
        <Victory victory={this.state.victory}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('SkeletonStrike', () => SkeletonStrike);
