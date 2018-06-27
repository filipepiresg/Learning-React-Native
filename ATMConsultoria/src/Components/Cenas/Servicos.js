import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BarraSuperior from '../BarraSuperior';

const imgContato = require('../../imgs/detalhe_servico.png');
export default class Servicos extends Component {
    render(){
        const { container, logo, txtTitulo,txts } = styles, cor='#19D1C8';
        return(
            <View style={ container }>
                <BarraSuperior empresa={this.props.empresa} cor={cor} voltar navigator={this.props.navigator}/>
                <View style={ logo }>
                    <Image source={ imgContato } />
                    <Text style={[txtTitulo, {color:cor}]}>Tipos de Serviços</Text>
                </View>
                <View style={{flexDirection:'column', flex:1, marginHorizontal: 20}}>
                <Text style={ txts }>- Consultorias </Text>
                <Text style={ txts }>- Processos </Text>
                <Text style={ txts }>- Licitações </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff', 
        flex:1
    },
    logo:{
        margin: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    txtTitulo:{
        fontSize: 30,
        fontWeight:'bold'
    },
    txts:{
        marginVertical:15,
        fontSize: 16
    },
});