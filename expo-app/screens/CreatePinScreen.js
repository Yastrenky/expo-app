import React from 'react';
import { View, StyleSheet, Text, Alert} from 'react-native';
import Colors from '../constants/Colors';
import PinPad from '../components/PinPad';
import {CheckBox} from 'react-native-elements';
import Storage from '../methods/storage';

export default class PinScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    pin: ""
  }

  onDone = (err) =>{
    if(err){
      console.log(err)
    } else {
      this.props.navigation.navigate("Main")
    }
  }

  onFinishPin = (pin) => {
    if(!this.state.pin.length){
      this.setState({pin: pin})
    }
    else{
      if(this.state.pin != pin){
        Alert.alert(
          'Error',
          'Pins and pin confirmation do not match',
          [
            {text: 'OK', onPress: () => this.setState({pin: ""})},
          ],
          { cancelable: false }
        )
      }
      else{
        Storage.store("credentials_info", pin, this.onDone)
      }     
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerTitle}>{ !this.state.pin.length ? "Create 5 digit PIN" : "Confirm 5 digit PIN"}</Text>
        </View>
        <View style={styles.pinPadContainer}>
          <PinPad onDoneTyping={(pin)=> this.onFinishPin(pin)}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: Colors.tintColor,
  },
  header:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle:{
    fontSize: 27,
    fontWeight: 'bold',
    color: '#fff'
  },
  icon: {
    width: 100,
    height: 100
  },
  pinPadContainer: {
    flex: 3,
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  fingerPrintCheckBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});
