import React, { Component } from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
import BarraSuperior from '../BarraSuperior';
import imgClientes from '../../imgs/detalhe_cliente.png'
// import axios from 'axios';
const clientes = [require('../../imgs/cliente1.png'),require('../../imgs/cliente2.png')]
// let clientes;
export default class Clientes extends Component {
    constructor(props){
        super(props);
        this.state = {clientes: []};
    }
    componentWillMount(){
        // Receber a lista de clientes por requisicao http
        /* axios.get('')
            .then(res => {clientes = res.data}))
            .catch(console.log('Erro ao puxar clientes!')); */
    }
    render(){
        const { logo, txtTitulo, infos, txtCliente, container } = styles, cor ='#B9C941';
        return (
            <View style={ container }>
                <BarraSuperior empresa={this.props.empresa} cor={cor} voltar navigator={this.props.navigator}/>
                <View style={ logo }>
                    <Image source={ imgClientes } />
                    <Text style={[txtTitulo, {color: cor}]}> Nossos Clientes </Text>
                </View>
                <ScrollView style={infos}>
                    <Image source={clientes[0]} />
                    <Text style={txtCliente}>Lorem ipsum dolorem</Text>
                    <Image source={clientes[1]} />
                    <Text style={txtCliente}>Lorem ipsum dolorem</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff', 
        flex:1
    },
    txtCliente:{
        margin: 20,
        fontSize: 16
    },
    infos:{
        margin: 20
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
    }
});