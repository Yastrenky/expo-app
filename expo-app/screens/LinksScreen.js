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
