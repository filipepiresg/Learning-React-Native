import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput,TouchableHighlight } from 'react-native'
import Note from './src/Components/Note';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {notes: ['Viajar','Estudar'], note:''};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize:30, color:'#fff', fontWeight:'600',/*  fontFamily:'CourierNew' */}}>To Do List</Text>
        </View>
        <ScrollView style={styles.body}>
          {this.state.notes.map( (note, key) => <Note key={key}name={note} /> )}
        </ScrollView>
          <Text>{this.state.note}</Text>
        <View style={styles.footer}>
          <TextInput placeholder='Digite sua nota' onChangeText={(note) => this.setState({note})} style={styles.txtInput}/>
          <TouchableHighlight onPress={() => { console.log('+ pressionado') } }
            activeOpacity={0.6}
            underlayColor={'#EB39AA'}
            style={styles.button}>
            <Text style={{fontSize:30, color:'#EB39AA', fontWeight:'600'}}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 8,
    backgroundColor:'#fff'
  },
  header:{
    flex: 0.2,
    backgroundColor:'#EB39AA',
    alignItems:'center',
    justifyContent:'center'
  },
  body:{
    flex: 6,
    backgroundColor:'#fff',
    borderWidth:1,
    marginHorizontal: 10
  },
  footer:{
    flexDirection:'row',
    backgroundColor:'#EB39AA',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  txtInput:{
    flex:1,
    borderColor: '#fff',
    borderWidth: 1, 
    backgroundColor: '#fff',
    marginRight: 10,
    paddingHorizontal: 5,
  },
  button:{
    // flex:1,
    // backgroundColor:'#EB39AA',
    backgroundColor: '#fff',
    width: 50,
    height:50,
    borderRadius: 30,
    borderColor:'#fff',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
