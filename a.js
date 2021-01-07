import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [name, setemail]=usestate('nnh@gmail.com');
  const [age, setPassword]=useState('***');
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Email</Text>
      <TextInput style={styles.input} placeholder='e.g. nnh@gmail.com'
        onChangeText={(val) => setEmail(val)}>
      </TextInput>

      <Text style={styles.txt}>Mật khẩu</Text>
      <TextInput secureTextEntry={true}
        style={styles.input} placeholder='********'
        onChangeText={(val) => setPassword(val)}>
      </TextInput>
      <TouchableOpacity onPress={()=>{Alert.alert('đăng nhập thành công');}}>
        <Text style={styles.ButtonStyle}>Đăng nhập</Text>
      </TouchableOpacity>
      <Text>Lấy lại mật khẩu</Text>
      
      <StatusBar></StatusBar>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
  },
  txt:{
    alignSelf: 'flex-start',
    fontSize: 18,
    marginLeft:35,
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding: 10,
    margin:10,
    width: 300,
  },
  ButtonStyle:{
    borderWidth: 0.5 ,
    backgroundColor:'orange',
    padding: 10,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    margin: 20,
    width: 300,
  }
});