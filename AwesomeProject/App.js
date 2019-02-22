/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import styles from './styleNumber';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import NutBam from './nut';
import NutBam0 from './nut0';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = { 
      so: '' ,
    }
  }

  bamso = (a) =>{
    let trung_gian = this.state.so + a 
    if (a == '') {
      this.setState({
        so: eval(trung_gian)
      })
    } else {
      this.setState({
        so: trung_gian
      })
    }
    
  }

  render() {
    return (
      <View style = {{ flex:1 }}>
        <View style = {styles.view} >
          <Text style={{fontSize:30}}> {this.state.so } </Text>
          {/* <Text style={{fontSize:30}}> {this.state.kq } </Text> */}
        </View>
        <View style = {{flex:7}}>
          <View style = {styles.gop}>
            <NutBam
              number={1}
              onPress={() => {
                this.bamso('1')
              }}
            />
            <NutBam
              number={2}
              onPress={() => {
                this.bamso('2')
              }}
            />
            <NutBam
              number={3}
              onPress={() => {
                this.bamso('3')
              }}
            />
            <NutBam
              number={'+'}
              onPress={() => {
                this.bamso('+')
              }}
            />
          </View>
          <View style = {styles.gop}>
            <NutBam
              number={4}
              onPress={() => {
                this.bamso('4')
              }}
            />
            <NutBam
              number={5}
              onPress={() => {
                this.bamso('5')
              }}
            />
            <NutBam
              number={6}
              onPress={() => {
                this.bamso('6')
              }}
            />
            <NutBam
              number={'-'}
              onPress={() => {
                this.bamso('-')
              }}
            />
          </View>
          <View style = {styles.gop}>
            <NutBam
              number={7}
              onPress={() => {
                this.bamso('7')
              }}
            />
            <NutBam
              number={8}
              onPress={() => {
                this.bamso('8')
              }}
            />
            <NutBam
              number={9}
              onPress={() => {
                this.bamso('9')
              }}
            />
            <NutBam
              number={'*'}
              onPress={() => {
                this.bamso('*')
              }}
            />
          </View>
          <View style = {styles.gop}>
          <NutBam0
            number={0}
            onPress={() => {
              this.bamso('0')
            }}
          />
          <NutBam
            number = {'='}
            onPress= { () => {
              this.bamso('')
            }}
          />
          <NutBam
            number={'/'}
            onPress={() => {
              this.bamso('/')
            }}
          />
        </View>
        </View>
      </View>
    );
  }
}

