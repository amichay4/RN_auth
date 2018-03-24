import React from "react";
import { View, Text } from "react-native";
import firebase from "react-native-firebase";
import { styles, } from './styles/Styles';
import Login from "./components/Login";

class App extends React.Component {
  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null
    };
  }

  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    const { user, } = this.state;
    if (!user) {
      return <Login />;
    }

    return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.header}>Welcome {user.displayName}!</Text>
            <View style={styles.avatar}>
              <Image source={{ uri: user.photoURL }} style={styles.avatarImage} />
            </View>
          </View>
        </View>
    );
  }
}
 
export default App;
