import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styleNumber';

export default class calcu extends Component<Props>{
    render(){
        let {number, onPress} = this.props ;
        return(
            <TouchableOpacity
                style={styles.number}
                onPress={() => {
                    onPress()
                }}
            >
                <Text style = {{ fontSize: 25}}> {number} </Text>
            </TouchableOpacity>
        );
    }
}