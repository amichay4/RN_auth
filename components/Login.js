import React from "react";
import firebase from "react-native-firebase";
import { View, Text } from "react-native";
import { googleLogin } from "../utils/googleSignin";
import { facebookLogin } from "../utils/facebookSignin";
import { styles, iconStyles, } from '../styles/Styles';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>Welcome Stranger!</Text>
          <View style={styles.avatar}>
            <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
          </View>
          <Text style={styles.text}>
            Please log in to continue {"\n"}
            to the awesomness
          </Text>
        </View>
        <View style={styles.buttons}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={this.facebookLogin}
            {...iconStyles}
          >
            Login with Facebook
          </Icon.Button>
          <Icon.Button
            name="google"
            backgroundColor="#DD4B39"
            onPress={this.googleLogin}
            {...iconStyles}
          >
            Or with Google
          </Icon.Button>
        </View>
      </View>
    );
  }
}
