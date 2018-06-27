import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BarraSuperior from '../BarraSuperior';

const imgContato = require('../../imgs/detalhe_contato.png');
export default class Contato extends Component {
    render(){
        const { container, logo, txtTitulo,txts } = styles, cor='#61BD8C';
        return(
            <View style={ container }>
                <BarraSuperior empresa={this.props.empresa} cor={cor} voltar navigator={this.props.navigator}/>
                <View style={ logo }>
                    <Image source={ imgContato } />
                    <Text style={[txtTitulo, {color:cor}]}>Nossos Contatos</Text>
                </View>
                <View style={{flexDirection:'row', marginHorizontal: 20}}>
                    <Text style={ [txts,{fontWeight:'bold', fontSize: 25}] }> E-mail: </Text>
                    <Text style={ txts }> atm_consultoria@email.com </Text>
                </View>
                <View style={{flexDirection:'row', marginHorizontal: 20}}>
                    <Text style={ [txts,{fontWeight:'bold', fontSize: 25}] }> Telefone: </Text>
                    <Text style={ txts }> (DDD) 23414-1123 </Text>
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
        fontSize: 16,
        alignSelf:'baseline'
    },
});