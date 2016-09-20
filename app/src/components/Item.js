import React, { Component, PropTypes } from 'react'
import { deleteItem } from '../ducks/items.js'

class Item extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.state = {
      text: props.text,
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit(event) {
    if (event.keyCode == 13) {
      // update text in store
      event.target.blur()
    }
  }

  onDelete(event) {
    event.stopPropagation()
    this.context.store.dispatch(deleteItem(this.props.id))
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

Item.contextTypes = {
  store: PropTypes.object,
}

export default Item

