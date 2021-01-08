import { StatusBar } from "expo-status-bar";
import React from "react";
import Categorys from "./components/CategoryListItem";
import Register from "./components/Register";
import Cont from "./components/Content";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import axios from "axios";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: "",
      pass: "",
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://192.168.1.26/api/public/api/user",
      data: null,
    })
      .then((res) => {
        this.setState({ users: res.data }), console.log(this.state.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  login = () => {
    this.state.users.map((obj) => {
      if (
        obj.username === this.state.username &&
        obj.pass === this.state.pass
      ) {
        console.log("đăng nhập nhành công");
        this.props.navigation.replace("Home", { tk: obj.username });
      } else {
        console.log("đăng nhập thất bại");
      }
    });
  };
  onChangeTK = (username) => {
    this.setState({ username });
  };
  onChangeMK = (pass) => {
    this.setState({ pass });
  };
  register = () => {
    this.props.navigation.navigate("Registers");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. nnh@gmail.com"
          onChangeText={this.onChangeTK}
          value={this.state.username}
        ></TextInput>

        <Text style={styles.txt}>Mật khẩu</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="********"
          onChangeText={this.onChangeMK}
          value={this.state.pass}
        ></TextInput>
        <TouchableOpacity onPress={this.login}>
          <Text style={styles.ButtonStyle}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.flx}>
          <TouchableOpacity onPress={this.register} style={{ flex: 1 }}>
            <Text style={{ textAlign: "left" }}>Đăng ký</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }}>
            <Text style={{ textAlign: "right" }}>Lấy lại mật khẩu</Text>
          </TouchableOpacity>
        </View>

        <StatusBar></StatusBar>
      </View>
    );
  }
}

class Home extends React.Component {
  render() {
    // console.log(this.props.route.params.tk);
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Ct}
          options={{ title: "VNEXPRESS" }}
        />
        <Tab.Screen name="Settings" component={Login} />
      </Tab.Navigator>
    );
  }
}
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.route.params.id,
    };
  }

  render() {
    return <Cont id={this.state.id} />;
  }
}
class Registers extends React.Component {
  render() {
    return <Register prop={this.props} />;
  }
}
class Ct extends React.Component {
  render() {
    return <Categorys prop={this.props} />;
  }
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "VNXpress", headerLeft: null }}
        />
        <Stack.Screen
          name="Registers"
          component={Registers}
          options={{ title: "Register" }}
        />
        <Stack.Screen
          name="Content"
          component={Content}
          options={{ title: "Register" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#00400030",
    padding: 20,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
  },
  txt: {
    alignSelf: "flex-start",
    fontSize: 18,
    marginLeft: 35,
  },
  flx: {
    flexDirection: "row",
    width: "80%",
    height: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    margin: 10,
    width: 300,
  },
  ButtonStyle: {
    borderWidth: 0.5,
    backgroundColor: "orange",
    padding: 10,
    fontSize: 18,
    color: "white",
    textAlign: "center",
    margin: 20,
    width: 300,
  },
});
