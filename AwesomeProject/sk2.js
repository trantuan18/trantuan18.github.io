import React, {Component} from "react";
import {View, Text, Image} from 'react-native';
import styles from './style2'

export default class place extends Component<Props>{
    render(){
        let {item} = this.props ; 
        return(
            <View>
                <View style= {styles.v1}>
                    <Text style = {styles.t1}> {item.t1} </Text>
                    <Image 
                        source = {item.img}
                        style = {{width:15,height:15}}
                    />
                    <Text style = {styles.t2}> 
                        
                        {item.t3}
                    </Text>
                </View>
                <View style= {styles.v2}>
                    <Text style={styles.t3}> {item.t2} </Text>
                </View>
            </View>
        )
    }
}