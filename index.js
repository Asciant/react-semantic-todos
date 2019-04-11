import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux"
import store from './store/store'

import { 
  Container,
  Header
  } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import New from './New'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Container text style={{ marginTop: '1em' }}>
          <New />
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a base react app using Semantic UI.</p>
        </Container>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));