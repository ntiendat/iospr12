import React , { Component } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

import { IP } from "../../env";
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
  List
} from "react-native";
export default class TheGioi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bai_viet: [],
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://" + IP + "/api/public/api/baiviet",
      data: null,
    })
      .then((res) => {
        this.setState({ bai_viet: res.data });
        //  console.log(this.state.bai_viet);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <ScrollView>
     
        <FlatList
          data={this.state.bai_viet}
          renderItem={({ item }) => (
            <TouchableOpacity
            keyExtractor={item.id}

              onPress={() =>
                // console.log(this.props.prop)
                this.props.prop.navigation.navigate("Content", { id: item.id })
              }
            >
              <View style={({ flex: 1 }, styles.container)}>
                <StatusBar style="auto" />

                <Text style={styles.title}>{item.tieu_de}</Text>
                <Image style={styles.catrgoryImage} source={{ uri: item.anh }} />
                <Text>{item.noi_dung.slice(0, 150) + "..."}</Text>
              </View>
            </TouchableOpacity>
            
          
           
            
          )}
        ></FlatList> 
        {/* {this.state.bai_viet.map((obj) => {
          return (
            <TouchableOpacity
              key={obj.id.toString()}
              onPress={() =>
                this.props.prop.navigation.navigate("Content", { id: obj.id })
              }
            >
              <View style={({ flex: 1 }, styles.container)}>
                <StatusBar style="auto" />

                <Text style={styles.title}>{obj.tieu_de}</Text>
                <Image style={styles.catrgoryImage} source={{ uri: obj.anh }} />
                <Text >{ obj.noi_dung.slice(0, 150)+'...'}</Text>
              </View>
            </TouchableOpacity>
          );
        })} */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  catrgoryImage: {
    width: "100%",
    height: 200,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
  container: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    width: "100%",
    height: "auto",
    borderRadius: 4,
    shadowOpacity: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 20,
  },
});
