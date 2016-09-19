import React, { Component, PropTypes } from 'react'
import { createItem, deleteItemPlaceholder } from '../actions/items.js'

class ItemPlaceholder extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.state = {
      text: '',
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit(event) {
    if (event.keyCode == 13) {
      event.target.blur()
      //this.context.store.dispatch(deleteItemPlaceholder())
      this.context.store.dispatch(
        createItem(this.state.text, this.props.dayMoment)
      )
    }
  }

  onDelete(event) {
    event.stopPropagation()
    // TODO: dispatch placeholder deletion
    this.context.store.dispatch(deleteItemPlaceholder())
  }

  render() {
    return (
      <div style={{
        position: 'relative',
        textAlign: 'center',
        width: '90%',
      }}>
        <textarea
          style={{
            backgroundColor: '#dce',
            outline: 'none',
            resize: 'none',
            padding: '5px',
            borderStyle: 'none',
            width: '100%',
            marginTop: '5%',
          }}
          value={this.state.text}
          onClick={(event) => event.stopPropagation()}
          onChange={this.handleChange}
          onKeyDown={this.onSubmit}
          autoFocus
        />
        <i
          style={{
            position: 'absolute',
            right: '3px',
            top: '8px',
            zIndex: 10,
          }}
          className="fa fa-times"
          onClick={this.onDelete}
        >
        </i>
      </div>
    )
  }
}

ItemPlaceholder.contextTypes = {
  store: PropTypes.object,
}

export default ItemPlaceholder


