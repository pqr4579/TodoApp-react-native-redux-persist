import React, {Component} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'
import TodoApp from './src/components/TodoApp'

const { store,persistor} = configureStore();

export default class App extends Component{  
  render(){
    return(
      <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <TodoApp />
      </PersistGate>
      </Provider>
    )
  }
}
