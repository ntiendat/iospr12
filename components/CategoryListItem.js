import React from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import Ski from "../assets/ski.png";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
export default class CategoryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bai_viet: [],
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "http://192.168.1.26/api/public/api/baiviet",
      data: null,
    })
      .then((res) => {
        this.setState({ bai_viet: res.data }), console.log(this.state.bai_viet);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <ScrollView>
        {this.state.bai_viet.map((obj) => {
          return (
            <TouchableOpacity>
              <View style={({ flex: 1 }, styles.container)}>
                <StatusBar style="auto" />

                <Text style={styles.title}>{obj.tieu_de}</Text>
                <Image
                  style={styles.catrgoryImage}
                  source={{ uri: obj.anh }}
                />
                <Text>{obj.noi_dung}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      
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
