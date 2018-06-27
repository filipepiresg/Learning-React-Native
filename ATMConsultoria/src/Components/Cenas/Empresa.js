import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BarraSuperior from '../BarraSuperior';

const imgEmpresa = require('../../imgs/detalhe_empresa.png');
export default class Empresa extends Component {
    render(){
        const { container, logo, txtTitulo,txts } = styles, cor='#EC7148';
        return(
            <View style={ container }>
                <BarraSuperior empresa={this.props.empresa} cor={cor} voltar navigator={this.props.navigator}/>
                <View style={ logo }>
                    <Image source={ imgEmpresa } />
                    <Text style={[txtTitulo, {color:cor}]}>A Empresa</Text>
                </View>
                <Text style={ txts }>Lorem ipsum dolorem, Lorem ipsum dolorem, Lorem ipsum dolorem
                Lorem ipsum dolorem, Lorem ipsum dolorem, Lorem ipsum dolorem
                </Text>
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
        marginVertical: 50,
        marginHorizontal: 20,
        fontSize: 16,
        alignSelf:'baseline'
    },
});