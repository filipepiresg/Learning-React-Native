import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
//import de componentes criados
import BarraSuperior from '../BarraSuperior';
// import de imagens
import logo from '../../imgs/logo.png';
import imgCliente from '../../imgs/menu_cliente.png';
import imgContato from '../../imgs/menu_contato.png';
import imgEmpresa from '../../imgs/menu_empresa.png';
import imgServicos from '../../imgs/menu_servico.png';
import Botao from '../Botao';

export default class CenaPrincipal extends Component {
    render(){
        const {imgLogo, boxMenu, image, menu, boxLogo } = styles, cor='#999';
        return(
            <View style={{flex:1}}>
                <BarraSuperior empresa={this.props.empresa} cor={cor}/>
                <View style={boxLogo} >
                    <Image source={logo} style={ imgLogo } />
                </View>

                <View style={ [menu,{marginBottom:10}] } >
                    <View  style={ boxMenu } >
                        <Botao image={imgCliente} onPress={ () => this.props.navigator.push({id: 'clientes'}) }
                           styleBox={{margin:5}} styleImg={image}/>
                        <Botao image={imgContato} onPress={ () => this.props.navigator.push({id: 'contato'}) }
                            styleBox={{margin:5}} styleImg={image}/>
                    </View>

                    <View style={ boxMenu }>
                        <Botao image={imgEmpresa} onPress={ () => this.props.navigator.push({id: 'empresa'}) }
                            styleBox={{margin:5}} styleImg={image}/>
                        <Botao image={imgServicos} onPress={ () => this.props.navigator.push({id: 'servicos'}) }
                            styleBox={{margin:5}} styleImg={image}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imgLogo:{
        height:100,
        width: 300,
    },
    boxMenu:{
        flexDirection:'row',
        marginVertical:15,
    },
    image:{
        height:133,
        width: 133,
        marginHorizontal: 14,
    },
    menu:{
        alignSelf:'center',
        margin: 10,
    },
    boxLogo:{
        alignItems:'center',
        marginVertical:30
    }
});