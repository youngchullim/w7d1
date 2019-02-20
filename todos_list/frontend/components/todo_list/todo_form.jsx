import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTODO, receiveTODOS } from '../../actions/todo_actions';
import {merge} from 'lodash';


class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.unqiueId = this.uniqueId.bind(this);
  
  }

  updateTitle(event) {
    this.setState( {title: event.currentTarget.value })
  }
  updateDescription(event) {
    this.setState( {description: event.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {id: this.uniqueId(), title: this.state.title, body: this.state.body}
    this.props.receiveTODO(newTodo)
  }

  uniqueId() {
    return new Date().getTime();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title: <input type="text" onChange={this.updateTitle} value={this.state.title}/>
          </label>

          <label>
            Description: <input type="text" onChange={this.updateDescription} value={this.state.description}/>
          </label>
          
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export default AddTodo