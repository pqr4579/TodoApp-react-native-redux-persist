import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import Dimensions from 'Dimensions';

import {
	View,
	TextInput,
	StyleSheet,
} from 'react-native';

import plusIcon from '../../icons/plus.png';
import ButtonIcon from '../Buttons/ButtonIcon';

const DEVICE_WIDTH = Dimensions.get('window').width;

const AddTodo = props => {
	const {
		todos,
		actions,
		style,
	} = props;

	let textInput;
	let textValue = '';

	const _onSubmitEditing = () => {
		if (textValue.length > 0) {
			actions.addTodo(textValue);
		}
		textInput.clear();
	}

	const _onChangeText = text => textValue = text;

	return (
		<View style={styles.container}>
			<TextInput style={styles.textInput}
				autoCorrect={false}
				placeholder='Add Things To do'
				placeholderTextColor='gray'
				returnKeyType='done'
				onChangeText={_onChangeText}
				onSubmitEditing={_onSubmitEditing}
				ref = {el => textInput = el} />
			<ButtonIcon onPress={_onSubmitEditing}
				source={plusIcon}
				style={styles.plusButton}
				width={30} height={30} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	plusButton: {
		marginRight: 15,
		marginTop: -35,
		alignItems: 'flex-end',
	},
	textInput: {
		height: 40,
		width: DEVICE_WIDTH - 60,
		marginTop: 15,
		paddingLeft: 10,
		paddingRight: 35,
		color: 'white',
		borderRadius: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
});

AddTodo.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

export default AddTodo;
