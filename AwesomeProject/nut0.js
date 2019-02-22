import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styleNumber';

export default class calcu extends Component<Props>{
    render(){
        let {number} = this.props ;
        return(
            <TouchableOpacity
            style={styles.number0}
            onPress = { () => {
                onPress()
            }}
            >
                
                <Text style={ {fontSize: 25} }> {number} </Text>
            </TouchableOpacity>
        );
    }
}