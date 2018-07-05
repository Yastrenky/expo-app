import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import Colors from '../constants/Colors';
import PinPad from '../components/PinPad';
import {CheckBox} from 'react-native-elements';

export default class PinScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    checked: false
  }

  onTryLogin = (pin) => {

  }

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: Colors.tintColor,
  }
});
