import React, { Component } from 'react';
import { StyleSheet, View, Text,StatusBar, Image,TouchableHighlight } from 'react-native';
import btnVoltar from '../imgs/btn_voltar.png';

export default class BarraSuperior extends Component {
    render(){
        const {barra, txtTitulo} = styles;
        if(this.props.voltar){
            return (
                <View style={ [barra,{backgroundColor:this.props.cor}] }>
                    <View style={ {flex:2} }>
                    <TouchableHighlight  onPress={() => {
                            this.props.navigator.pop();
                        }}>
                            <Image source={btnVoltar}/>
                        </TouchableHighlight >
                    </View>
                    <View style={ {flex:8} }>
                        <StatusBar backgroundColor={this.props.cor} />
                        <Text style={ txtTitulo }>{this.props.empresa}</Text>
                    </View>
                    
                    <View style={ {flex:2} }>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={ [barra,{backgroundColor:this.props.cor}] }>
                    <View style={ {flex:8} }>
                        <StatusBar backgroundColor={this.props.cor} />
                        <Text style={ txtTitulo }>{this.props.empresa}</Text>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    barra:{
        height: 90,
        padding:10,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center',
    },
    txtTitulo:{
        alignSelf:'center',
        // color:'#fff',
        fontWeight:'bold',
        fontSize: 20,
    }
});
