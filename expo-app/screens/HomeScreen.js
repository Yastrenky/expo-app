import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Storage from '../methods/storage';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
      headerRight: (
        <HeaderButton onPress={()=> navigation.state.params.onLogout()} iconName={"ios-log-out"} size={30}/>
      )
    }
  };

  state ={
    list:[
      // {
      //   key:'a',
      //   name: 'Google',
      //   pass: '',
      //   healthColor:'green',
      //   passType:''
      // }, 
      // {
      //   key:'b',
      //   name: 'Bank of America',
      //   pass: '',
      //   healthColor:'orange',
      //   passType:''
      // },             
      // {
      //   key:'c',
      //   name: 'GitHub',
      //   pass: '',
      //   healthColor:'red',
      //   passType:''
      // }, 
    ]
  }

  onDone = (err, val) =>{
  }

  onLogout = () => this.props.navigation.navigate('Auth');

  componentDidMount(){
    this.props.navigation.setParams({
      onLogout: this.onLogout
    });

    Storage.get("pass_list",this.onDone)
   }

  render() {
    return (
      <View style={styles.container}>
      <TextInput style={styles.search} placeholder="Search"/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <FlatList
            data={this.state.list}
            renderItem={({item, index}) => <Tab item={item}></Tab>}
           />

        </ScrollView>
      </View>
    );
  }
}

const Tab = props =>{
  let color = props.item.healthColor;
  let healthName = "unknown";

  switch(color) {
    case "green":
        healthName = "Strong"
        break;
    case "orange":
        healthName = "Fair"
        break;
    case "red":
        healthName = "Weak"
        break;
    default:
        healthName = "unknown";
} 
  

  return(

    <TouchableOpacity style={styles.key}>

      <View style={styles.tabElementContainer}>
        <View style={styles.dot_health}>
        <View style={[styles.dot, {backgroundColor:color}]}></View>
      </View>

      <View style={styles.tabElementTextContainer}>
        <Text style={styles.tabElementText1}>{props.item.name}</Text>
        <Text style={[styles.tabElementText2, {color:color}]}>{healthName}</Text>
      </View>

      <View style={styles.tabElementIcon}>
        <Ionicons name="ios-arrow-forward" size={32} color="#000" />
        </View>
      </View>

      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  search:{
    padding: 10,
    marginTop: 20,
    marginBottom:10,
    marginRight: 10,
    marginLeft: 10,
  },
  tabElementContainer:{
    borderRadius: 20,
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 1,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabElementText1:{
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
  },
  tabElementText2:{
    textShadowColor: "#0000",
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
  },
  tabElementTextContainer:{
    flex: 5,
  },
  dot_health:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center"

  },
  dot:{
    borderRadius: 25,
    borderStyle: 'solid',
    width: 20,
    height: 20,
    borderColor: "#0000"
  },
  tabElementIcon:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
  }
});
