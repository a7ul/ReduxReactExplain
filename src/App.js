import React, { Component } from 'react';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';
import Button from './components/Button/Button';
import TextShow from './components/TextShow/TextShow';

const store = initStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          Count is <TextShow  message="TEST"/>
          <Button />
        </div>
      </Provider>
    );
  }
}

export default App;
