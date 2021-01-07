import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View  , ScrollView , FlatList, Button} from 'react-native';

export default function Category() {

  
   
  return (
    <View style={styles.container}>
     <Text>Chuyên Mục</Text>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop : 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
