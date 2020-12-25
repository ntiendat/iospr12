import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CategoryListItem from './components/CategoryListItem'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem title="Trượt tuyết" img="https://image.flaticon.com/icons/png/512/1/1227.png" />
      <StatusBar style="auto" />
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
