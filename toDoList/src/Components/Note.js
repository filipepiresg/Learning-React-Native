import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Note extends Component {
    render() {
        if(this.props.state){
            return (
                <View style={[styles.container,{opacity:0.3}]}>
                <Text style={[styles.txt,{textDecorationLine:'line-through'}]}>{this.props.name}</Text>
                <Button title='✔️' onPress={()=> this.setState({desative:false})}/>
                <Button title='✖️' onPress={()=>{console.log('delete note pressionado')}}/>
                </View>
            );
        }
        return (
            <View style={styles.container}>
            <Text style={styles.txt}>{this.props.name}</Text>
            <Button title='✔️' onPress={()=> this.setState({desative:true})}/>
            <Button title='✖️' onPress={()=>{console.log('delete note pressionado')}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        marginHorizontal: 10,
        paddingRight:10,
        flexDirection:'row',
        borderWidth:1,
        alignItems:'center',
        // borderStyle:'dashed'
        // opacity:0.4
        // border
    },
    txt:{
        fontSize: 25,
        paddingLeft:20,
        flex:1,
        // borderWidth:1
    }
})
