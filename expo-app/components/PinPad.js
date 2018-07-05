import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Layout from '../constants/Layout';
import { Ionicons } from '@expo/vector-icons';

export default class PinPad extends React.Component {

	state = {
		enteredKeys: ''
	}

	onSelectKey = (key) => {
		let newPin = this.state.enteredKeys + key;

		if( newPin.length <= 5 ){
			this.setState({
				enteredKeys: newPin
			})
		}
		
		if( newPin.length == 5 ){
			this.props.onDoneTyping(newPin);
			this.setState({enteredKeys: ''});
		}
	}

	onDelete = () => {
		this.setState({
			enteredKeys: this.state.enteredKeys.substr(0, this.state.enteredKeys.length-1)
		})
	}

  render() {
    return(
        <View style={styles.container}>
					<View style={styles.pinViewContainer} >
						<View style={styles.pin}>
							{ this.state.enteredKeys.split('').map((el, i) => ( <Dot key={i + el}/> ))}
						</View>
						{
							this.state.enteredKeys.length ? (
								<TouchableOpacity style={styles.deleteButton} onPress={this.onDelete}>
									<Ionicons name="ios-backspace" size={32} color="#FFF" />
								</TouchableOpacity>
							) : null
						}
					</View>
					<View style={styles.keyRow}>
						{ ['1','2','3'].map( (el, i) => (<Key keyNumber={el} key={i + el} onPress={this.onSelectKey}/>)) }
					</View>
					<View style={styles.keyRow}>
						{ ['4','5','6'].map( (el, i) => (<Key keyNumber={el} key={i + el} onPress={this.onSelectKey}/>)) }
					</View>
					<View style={styles.keyRow}>
						{ ['7','8','9'].map( (el, i) => (<Key keyNumber={el} key={i + el} onPress={this.onSelectKey}/>)) }
					</View>
					<View style={styles.keyRow}>
						{ ['0'].map( (el, i) => (<Key keyNumber={el} key={i + el} onPress={this.onSelectKey}/>)) }
					</View>
        </View>
    );
  }
}

const Key = props => {

	onPress = () => {
		props.onPress(props.keyNumber);
	}

	return(
		<TouchableOpacity style={styles.key} onPress={this.onPress}>
			<Text style={{color: '#FFF', fontSize: 20}}>{props.keyNumber}</Text>
		</TouchableOpacity>
	);	

};

const Dot = props => (
	<View style={styles.dot}></View>
);

const styles = StyleSheet.create({
  container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
  },
	pinViewContainer: {
		height: 15,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20
	},
	pin: {
		height: 30,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	dot: {
		width: 15,
		height: 15,
		backgroundColor: '#FFF',
		borderRadius: 7.5,
		marginLeft: 3,
		marginRight: 3
	},
	keyRow: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	key: {
		borderWidth: 2,
		borderColor: '#FFF',
		width: Layout.window.width * 0.21,
		height: Layout.window.width * 0.21,
		borderRadius: (Layout.window.width * 0.21) / 2,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5
	},
	deleteButton: {
		height: 30,
		marginLeft: 10
	}
});