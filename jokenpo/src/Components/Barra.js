import React  from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Barra extends React.Component {
    render(){
        const { barra, titulo } = styles;
        return (
            <View style={ barra }>
            <Text style={ titulo }>JO-KEN-POH</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    barra: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical: 40,
    },
    
    titulo:{
        color:'white',
        fontWeight:'bold',
        fontSize:30,
        shadowOpacity:20,
        shadowOffset:{width:0, height:0},
        shadowRadius: 10,
    },
});