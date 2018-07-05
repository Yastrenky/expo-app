import {createStackNavigator} from 'react-navigation';
import PinScreen from '../screens/PinScreen';
import CreatePinScreen from '../screens/CreatePinScreen'

export default  AuthNavigator = createStackNavigator({
    PinScreen: PinScreen,
    CreatePinScreen: CreatePinScreen
  },
  {
    navigationOptions: {    
      header: null
  }
 }
);
  