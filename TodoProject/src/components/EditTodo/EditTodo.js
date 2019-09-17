import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
} from 'react-native';

import backIcon from '../../icons/back.png';

const EditTodo = props => {
	const {
		todos,
		actions,
		id,
        text,
	} = props;

    let textValue = text;

	const _onPress = () => {
        actions.editTodo(id, textValue);
		Actions.mainScreen({type: ActionConst.RESET});
	}

    const _onChangeText = value => textValue = value;


	return (
		<View style={styles.container}>
			<View style={styles.textInputWrapper}>
                <TextInput style={styles.tilteTextInput}
                    placeholderTextColor ="white"
                    placeholder="제목을 입력해주세요"
					onChangeText={_onChangeText}
					autoCapitalize='none'
					autoCorrect={false}
					multiline={true}>
						<Text style={styles.titleText}>{textValue}</Text>
				</TextInput>
                <TextInput style={styles.contentTextInput}
                    placeholderTextColor ="black"
                    placeholder="내용을 입력해주세요"
                    returnKeyType='done'
                    multiline={true}>
                       <Text style={styles.contentText}> </Text>
                </TextInput>

			<View style={styles.btnWrapper}>
				<TouchableOpacity onPress={_onPress}
					activeOpacity={0.5}
					style={styles.btn}>
					    <Image source={backIcon} style={styles.image}/>
				</TouchableOpacity>
			</View>		
        </View>
    </View>
	);
}

EditTodo.propTypes = {
	todos: PropTypes.array,
	actions: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: 'green'
	},
	textInputWrapper: {
		marginTop: 20,
		marginHorizontal: 15,
	},
	tilteTextInput: {
        borderRadius : 15,
		height: 40,
		paddingHorizontal: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomWidth : StyleSheet.hairlineWidth,
    },
    contentTextInput:{
        marginTop : 20,
        marginBottom : 30,
        borderRadius : 15,
        height:80,
        paddingHorizontal:10,
        backgroundColor : 'white'
    },
	titleText: {
        color: 'white',
        backgroundColor: 'transparent',
    },

    contentText:{
        color:'black',
    },
	btnWrapper: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	btn: {
		margin: 20,
		width: 40,
		height: 40,
		borderRadius: 100,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
	},
	image: {
		width: 40,
		height: 40,
	},
});

export default EditTodo;