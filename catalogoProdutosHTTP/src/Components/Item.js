import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Item extends React.Component {
    render() {
        const { container, boxImage, image, boxItem } = styles;
        return(
            <View style={ container }>
                <View style={ boxImage }>
                    <Image style={ image } source={{uri: this.props.item.foto}} />
                </View>
                <View style={ boxItem }> 
                    <Text style={{fontWeight:'bold'}}>{this.props.item.titulo}</Text>
                    <Text>R$ {parseFloat(this.props.item.valor).toFixed(2)}</Text>
                    <Text>{this.props.item.local_anuncio}</Text>
                    <Text>{this.props.item.data_publicacao}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 2,
        marginVertical: 5,
        height: 110,
        flexDirection:'row',
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 7
    },
    boxImage:{
        justifyContent: 'center',
        alignItems:'center',
        paddingRight: 10
    },
    image:{
        height: 90,
        width: 100,
        borderRadius: 10,
        // borderWidth: 1,
        
    },
    boxItem:{ 
        flex:1,
        borderRadius: 10,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems:'center'
    }
});