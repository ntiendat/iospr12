import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Ski from '../assets/ski.png';
import { StyleSheet, Text, View , Image} from 'react-native';
export default function CategoryListItem(props) {
    return (

      <View style={{flex: 1},styles.container}>
      <StatusBar style="auto" />

        <Text style={styles.title} >{props.title}</Text>
        <Image style={styles.catrgoryImage} source={{uri: props.img}} />
      </View>
    );
}
  
const styles = StyleSheet .create({
    catrgoryImage:{
      width: 64,
      height: 64
    },
    title:{
      textTransform:'uppercase',
      marginBottom : 8,
      fontWeight: '700'
    },
    container:{
      alignItems:'center',
      padding:16,
      backgroundColor:'#fff',
      shadowColor:'#000',
      width:'80%',
      borderRadius:4,
      shadowOpacity:10,
      shadowOffset:{width:0 , height:0},
      marginBottom:20
    }

});