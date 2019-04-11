import React, { Component } from "react"
import { Form, Input } from 'semantic-ui-react'

import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as actionCreators from '../actions/todo'

import List from './List'

class New extends Component {
  constructor(props) {
    super(props)

    // React state
    this.state = {
      todo: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e, { name, value }) => this.setState({[name]: value})

  handleSubmit = (e) => {	
    e.preventDefault()
    console.log(this.props)
    this.props.addTodo(this.state.todo)
    this.setState({todo: ''})
  }

  render() {
    const { todos } = this.props

    return (
      <div>
        <form ref="todoForm" onSubmit={this.handleSubmit}>
          <Input 
            size='large' 
            fluid 
            focus 
            placeholder='I need to do....' 
            name="todo" 
            onChange={this.handleChange} 
            value={this.state.todo}
          />
        </form>

        <ul>
          {todos.map((d, i) => <List key={btoa(Math.random()).substring(0,12)} todo={d.todo} />)}
        </ul>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(New)