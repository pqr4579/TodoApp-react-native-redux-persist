import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import AddTodo from '../AddTodo/AddTodo';
import EditTodo from '../EditTodo/EditTodo';
import Visbility from '../Visibility/visibility'
import WallPaper from '../Wallpaper/index'
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import * as todoActions from '../../actions/todoActions';
import List from '../ListTodo';



class Main extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Text style={styles.titleText}>Todo List App</Text>
                <WallPaper>
                    <AddTodo {...this.props}/>
                    <List {...this.props}/>
                    <Visbility {...this.props}></Visbility>
                </WallPaper>
            </View>
        )
    }
}

Main.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : 'green',
        alignItems:'center'
    },
    titleText:{
        marginVertical :20,
        fontSize:30,
        fontWeight : 'bold',
        color : 'white',
    }
})

function mapStateToProps(state) {
	return {
		todos: state.todos,
		visibilityFilter: state.visibilityFilter,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(todoActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
