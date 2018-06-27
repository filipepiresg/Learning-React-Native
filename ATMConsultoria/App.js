import React from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import Principal from './src/Components/Cenas/Principal';
import Clientes from './src/Components/Cenas/Clientes';
import Contato from './src/Components/Cenas/Contato';
import Empresa from './src/Components/Cenas/Empresa';
import Servicos from './src/Components/Cenas/Servicos';

export default class App extends React.Component {
  render() {
    const empresa = 'ATM Consultoria';
    return (
      <Navigator
        initialRoute={ {id:'menu'} }
        renderScene={ (route, navigator) => {
          if (route.id === 'menu') {
            return (<Principal empresa={empresa} navigator={navigator}/>);
          }
          if (route.id === 'clientes') {
            return (<Clientes empresa={empresa} navigator={navigator}/>);
          }
          if (route.id === 'contato') {
            return (<Contato empresa={empresa} navigator={navigator}/>);
          }
          if (route.id === 'empresa') {
            return (<Empresa empresa={empresa} navigator={navigator}/>);
          }
          if (route.id === 'servicos') {
            return (<Servicos empresa={empresa} navigator={navigator}/>);
          }
        }}
      />
    );
  }
}
