import React, { Component } from "react"
import { Input } from 'semantic-ui-react'

class New extends Component {
  constructor() {
    super()

    this.state= {
      todos: [],
      todo: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault()
    const todo = this.state.todo
    this.setState((prevState) => {
      const todos = prevState.todos
      todos.push(prevState.todo)
      return { 
        todos: todos,
        todo: ''
      }
    })
  }

  render() {
   const { todo } = this.state

    return (
      <div>
        <form ref="todoForm" onSubmit={this.handleSubmit}>
          <Input size='large' fluid focus placeholder='I need to do....' name="todo" value={todo} onChange={this.handleChange} />
        </form>
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    )
  }
}

export default New