import React from 'react'
import ListHeaderBar from '../containers/ListHeaderBar'
import VisibleContactList from '../containers/VisibleContactList'
import ContactForm from '../containers/ContactForm'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  flexListContainer: {
    flexBasis: '45%'
  },
  form: {
    flexBasis: '45%',
    backgroundColor: 'aliceblue',
    padding: 15
  }
})

class MainSection extends React.Component {
  classNames = () => {
    const { isSelected, detailMode } = this.props;

    return classnames(
      detailMode ? 'col-sm-12' : 'col-md-6',
      css(styles.contact,
        isSelected ? styles.selected : '',
        detailMode ? styles.detail : ''
      )
    )
  }

  render () {
    return (
      // Component that will allow filter the list by name, or some other properties
      // <SearchInput />
      <div className={css(styles.container)}>
        {this.renderMainContent()}
        {this.renderForm()}
      </div>
    )
  }

  renderMainContent = () => {
   const classNames = css(this.hasToShowForm() ? styles.flexListContainer : '')
   return (
     <div className={classNames}>
       <ListHeaderBar />
       <VisibleContactList />
     </div>
   )
  }

  renderForm = () => {
    if (this.hasToShowForm()) {
      return (
        <div className={css(styles.form)}>
          <ContactForm />
        </div>
      )
    }
  }

  hasToShowForm = () => {
    const isEditing = this.props.isEditing
    const isAddingNewContact = this.props.isAddingNewContact
    return isEditing || isAddingNewContact
  }
}

export default MainSection
