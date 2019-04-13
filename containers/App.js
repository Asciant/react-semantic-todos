// App container for mapStateToProps and mapDispatchToState
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as actionCreators from '../actions/todo'

import Todos from "../components/Todos"

function mapStateToProps(state) {
  return {
    todos: state,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)