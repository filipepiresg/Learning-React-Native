import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Conteudo extends React.Component {
    render(){
        const { conteudo, conteudoJogado, resultado } = styles; 
        return (
            <View style={ conteudo }>
                <View style={ conteudoJogado } >
                    <Jogada tipo={this.props.usuario} />
                    <Text> X </Text>
                    <Jogada tipo={this.props.maquina} />
                </View>
                    
                <View style={ resultado } >
                    <Text style={ {fontSize: 30, fontWeight:'bold', alignSelf:'center'}}>{this.props.resultado}</Text>
                </View>
            </View>
        );
    }
}

class Jogada extends React.Component {
    render(){
        const pedra = require('../imgs/pedra.png'), 
        papel = require('../imgs/papel.png'), 
        tesoura =require('../imgs/tesoura.png');
        const { image } = styles;

        switch (this.props.tipo) {
            case 'Pedra':{
                return(
                    <View style={{flex:1}}>
                    <Image source={ pedra } style={ image }/>
                    </View>
                );
            }
            case 'Papel':{
                return(
                    <View style={{flex:1}}>
                    <Image source={ papel } style={ image }/>
                    </View>
                );
            }
            case 'Tesoura':{
                return(
                    <View style={{flex:1}}>
                    <Image source={ tesoura } style={ image }/>
                    </View>
                );
            }
            default:{
                return false;
            }
        }
    }
}

const styles = StyleSheet.create({
    conteudo: {
        flex:9,
        flexDirection:'column',
        backgroundColor:'#fff'
    },
    conteudoJogado: {
        flex:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    resultado:{
        flex:1,
        padding:20,
    },
    image:{
        flex:1,
        // padding: 20,
        width: 100,
        height:100,
        resizeMode:'contain',
        alignSelf:'center'
    }
});