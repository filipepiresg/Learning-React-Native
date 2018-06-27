import React, { Component } from 'react';
import { TouchableOpacity, View,Image } from 'react-native';

export default class Botao extends Component {
    render(){
        return(
            <View style={this.props.styleBox}>
                <TouchableOpacity onPress={this.props.onPress} navigator={this.props.navigator}>
                    <Image source={this.props.image}  style={this.props.styleImg}/>
                </TouchableOpacity >
            </View>
        );
    }
}
