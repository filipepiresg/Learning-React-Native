import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListaAnuncio from './src/Components/Lista';

export default class App extends React.Component {
  render() {
    const { container,boxTitulo,txtTitulo,boxAnuncios } = styles;
    return (
      <View style={ container }>
        <View style = { boxTitulo }>
          <Text style={ txtTitulo }>Catalogo de Produto</Text>
        </View>
        <View style={ boxAnuncios }>
          <ListaAnuncio />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  boxTitulo:{
    marginTop: 30, 
    height: 50, 
    justifyContent: 'center'
  },
  txtTitulo:{
    fontWeight:'bold', 
    fontSize:20, 
    alignSelf:'center'
  },
  boxAnuncios:{
    flex:1
  }
});
