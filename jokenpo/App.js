import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import Barra from './src/Components/Barra'
import Conteudo from './src/Components/Conteudo'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usuario: '',
      maquina: '',
      resultado: ''
    };
  }
  jokenpo (escolhaUsuario='Papel') {
    let num = Math.floor(Math.random()*3), escolhaMaquina='';
    switch(num){
      case 0: {
        escolhaMaquina = 'Pedra';
        break;
      }
      case 1: {
        escolhaMaquina = 'Papel';
        break;
      }
      case 2:{
        escolhaMaquina = 'Tesoura';
        break;
      }
      default:{ 
        escolhaMaquina = '';
      }
    }
    
    let resultado = '';
    switch(escolhaUsuario){
      case 'Pedra':{
        if(escolhaMaquina === 'Pedra') {
          resultado = 'Empate';
        } else if(escolhaMaquina === 'Papel') {
          resultado = 'Perdeu';
        } else {
          resultado = 'Venceu';
        }
        break;
      }
      case 'Papel':{
        if(escolhaMaquina === 'Pedra'){
          resultado = 'Venceu';
        } else if(escolhaMaquina === 'Papel'){
          resultado = 'Empate';
        } else {
          resultado = 'Perdeu';
        }
        break;
      }
        default: {
        if(escolhaMaquina === 'Pedra'){
          resultado = 'Perdeu';
        } else if(escolhaMaquina === 'Papel'){
          resultado = 'Venceu';
        } else {
          resultado = 'Empate';
        }
      }
    }
    this.setState({
      usuario: escolhaUsuario,
      maquina: escolhaMaquina,
      resultado
    });
  }
  
  render() {
    const {container,opcao, botao, image } = styles;
    const pedra = require('./src/imgs/pedra.png'), 
        papel = require('./src/imgs/papel.png'), 
        tesoura =require('./src/imgs/tesoura.png');
    return (
      <View style={ container }>
        <Barra />
        <Conteudo resultado={this.state.resultado} usuario={this.state.usuario}
        maquina={this.state.maquina}/>
        <View style={ opcao }>
          <TouchableOpacity style={ botao } onPress={ () => { this.jokenpo('Pedra') } }>
            <Image source={ pedra } style={ image } />
          </TouchableOpacity>
          
          <TouchableOpacity style={ botao } onPress={ () => { this.jokenpo('Papel')  } }>
            <Image source={ papel } style={ image } />
          </TouchableOpacity>
          
          <TouchableOpacity style={ botao } onPress={ () => { this.jokenpo('Tesoura') } }>
            <Image source={ tesoura } style={ image } />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E64FE',
  },
  opcao: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  botao:{
    flex:1,
    padding: 30,
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    flex:1,
    padding: 20,
    width: 100,
    height:100,
    resizeMode:'contain',
  }
});
