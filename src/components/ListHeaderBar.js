import React from 'react'
import Button from 'react-bootstrap/lib/Button'

class ListHeaderBar extends React.Component {
  handleAddNewContactClick (event) {
    event.preventDefault()
    event.stopPropagation()

    this.props.onAddNewContactClick()
  };

  handleToggleViewClick (event) {
    event.preventDefault()
    event.stopPropagation()

    this.props.onToggleListView()
  };

  render () {
    return (
      // Component that will allow filter the list by name, or some other properties
      // <SearchInput />

      <div className='row list-header-bar'>
        <Button type='button' onClick={this.handleAddNewContactClick}>Add New Contact</Button>
        <Button type='button' onClick={this.handleToggleViewClick}>ToggleView</Button>
      </div>

    )
  }
}

export default ListHeaderBar
