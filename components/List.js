import React, { Component } from "react"

class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  const { todo } = this.props

    return (
      <li>
        {todo}
      </li>
    )
  }
}

export default List