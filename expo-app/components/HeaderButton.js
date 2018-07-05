import React from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class HeaderButton extends React.Component {
 
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress()} >
        <Ionicons name={this.props.iconName} size={this.props.size} color="#FFF" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      marginRight: 20
  }
});
