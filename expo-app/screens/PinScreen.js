import React from 'react';
import { View, StyleSheet, Image, Alert} from 'react-native';
import Colors from '../constants/Colors';
import PinPad from '../components/PinPad';
import {CheckBox} from 'react-native-elements';
import Storage from '../methods/storage';

export default class PinScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  state = {
    pin:"",
    checked: false
  }

  onTryLogin = (pin) => {
    if(pin.toString() === this.state.pin){
      this.props.navigation.navigate("Main")
    }
    else{
      Alert.alert(
        'Error',
        'Invalid PIN',
        [
          {text: 'OK', onPress: () =>console.log("Invalid PIN")},
        ],
        { cancelable: false }
      )
    }
  }
  onDone = (err, val) =>{
    console.log("credentials_info",val)
    if(err){
      console.log(err)
    } else {
      if(val===null){
        this.props.navigation.navigate("CreatePinScreen")
      }
      else{
        this.setState({pin: val})
      }
    }

  }

  componentDidMount(){
   Storage.get("credentials_info",this.onDone)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image 
            source={require('../assets/images/icon.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.pinPadContainer}>
          <PinPad onDoneTyping={(pin)=> this.onTryLogin(pin)}/>
          <View style={styles.fingerPrintCheckBox}>
            <CheckBox
              title='Use Firnger Print'
              checked={this.state.checked}
              containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
              textStyle={{color: '#FFF'}}
              checkedColor="#FFF"
              uncheckedColor="#FFF"
              onPress={()=> this.setState({checked: !this.state.checked})}
            />
          </View>
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
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
