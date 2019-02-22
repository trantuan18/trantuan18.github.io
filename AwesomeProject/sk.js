import React, {Component} from 'react';
import { View, Text, Image } from "react-native";

import styles from './style'
export default class event extends Component<Props> {
    render(){
        console.log('props', this.props)
        let {item} = this.props

        return(
            <View style={styles.container}>
                <View style={styles.containerImg}>
                  <Image
                    style = {styles.img}
                    source={item.image}
                  />
                </View>
                <View style={styles.containerText}> 
                  <Text style = {styles.text1}> {item.name} </Text>
                  <Text style = {styles.text}> 
                    <Image 
                      source = { require('./img/calendar.png')}
                      style = { styles.imgIcon}
                    />
                          {' 13-15/02/2019'} 
                  </Text>
                  <Text style = {styles.text}> 
                    <Image 
                      source = { require('./img/placeholder.png')}
                      style = { styles.imgIcon}
                    />
                          {' Sân golf Hoàng Gia'}
                  </Text>
                </View>
            </View>

        );
    }
}
