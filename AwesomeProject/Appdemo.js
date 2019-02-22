/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import styles from './style2';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Sk from './sk2';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const danhSach = [
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
  {
    t1 : 'Chi Linh Hai Duong',
    t2 : 'HDC san 12:3',
    t3 : 'hai duong',
    img: require('./img/placeholder.png')
  },
]
const n = danhSach.length;
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          {
            danhSach.map(item1 => {
              return (
                <Sk
                  item1 = {item}
                />
              )
            })
          }
        </View>
      </ScrollView>
    );
  }
}

