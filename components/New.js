import React, { Component } from "react"
import { Form, Input, List, Image } from 'semantic-ui-react'

import * as icon from 'identicon.js'
import * as md5 from 'md5.js'
import { distanceInWordsToNow } from 'date-fns'

import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as actionCreators from '../actions/todo'

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

        <List divided verticalAlign='middle'>
            {todos.map((d, i) => {
              return (
                <List.Item key={d.key}>
                  <Image avatar src={`data:image/svg+xml;base64,${d.icon}`} />
                  <List.Content>
                    <List.Header as='a'>
                      {d.task}
                    </List.Header>
                    Created {distanceInWordsToNow(d.date, {includeSeconds: true})}
                  </List.Content>
                </List.Item>
              )
            })}
        </List>

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