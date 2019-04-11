import React, { Component } from "react"
import { Form, Input } from 'semantic-ui-react'

import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actionCreators from './actions/todo'

class New extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e, { name, value }) => console.log(this.props)

  render() {
    return (
      <div>
          <Form.Input 
            size='large' 
            fluid 
            focus 
            placeholder='I need to do....' 
            name="todo" 
            onChange={this.handleChange} 
          />
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(New)