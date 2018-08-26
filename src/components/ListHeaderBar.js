import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
      float: 'right'
    }
  })


class ListHeaderBar extends React.Component {
  handleAddNewContactClick = (event) => {
    event.preventDefault()
    event.stopPropagation()

    this.props.onAddNewContactClick()
  };

  handleToggleViewClick = (event) => {
    event.preventDefault()
    event.stopPropagation()

    this.props.onToggleListView()
  };

  render () {
    return (
      // Component that will allow filter the list by name, or some other properties
      // <SearchInput />

      <div className='row list-header-bar'>
        <Button className={css(styles.button)} onClick={this.handleAddNewContactClick}>
          Add New Contact
        </Button>
        <Button className={css(styles.button)} onClick={this.handleToggleViewClick}>
          ToggleView
        </Button>
      </div>

    )
  }
}

export default ListHeaderBar
