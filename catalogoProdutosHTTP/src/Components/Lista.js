import React from 'react';
import { ScrollView, View, Text} from 'react-native';
import Item from './Item';
import axios from 'axios';

export default class ListaAnuncio extends React.Component {
    constructor(props){
        super(props);
        this.state = {itens: []};
    }
    componentWillMount() {
        const link = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
        axios.get( link )
        .then( res => { this.setState({ itens: res.data })})
        .catch( err => console.log(err) );
    }
    
    render(){
        return (
            <ScrollView>
                { this.state.itens.map(item => 
                    <Item key={item.titulo} item={item} />) }
            </ScrollView>
            );
        }
    }