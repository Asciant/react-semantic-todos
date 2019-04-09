import React, { Component } from 'react';
import { render } from 'react-dom';
import { 
  Container,
  Header
  } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import New from './New'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <Container text style={{ marginTop: '1em' }}>
      <New />
      <Header as='h1'>Semantic UI React Fixed Template</Header>
      <p>This is a base react app using Semantic UI.</p>
      </Container>
    );
  }
}

render(<App />, document.getElementById('root'));
