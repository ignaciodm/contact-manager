import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
    }
  })


class ListHeaderBar extends React.Component {
  render () {
    return (
      // Component that will allow filter the list by name, or some other properties
      // <SearchInput />

      <div className='row list-header-bar'>
        <Button className={css(styles.button)} onClick={this.props.onAddNewContactClick}>
          Add New Contact
        </Button>
        <Button className={css(styles.button)} onClick={this.props.onToggleListView}>
          Toggle to {this.props.isOnDetailViewType ? 'mosaic' : 'detail'} view
        </Button>
      </div>

    )
  }
}

export default ListHeaderBar
