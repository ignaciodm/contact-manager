import React from 'react'
import ListHeaderBar from '../containers/ListHeaderBar'
import VisibleContactList from '../containers/VisibleContactList'
import ContactForm from '../containers/ContactForm'

class MainSection extends React.Component {
  render () {
    const isEditing = this.props.isEditing
    const isAddingNewContact = this.props.isAddingNewContact
    const showForm = isEditing || isAddingNewContact

    let form

    if (showForm) {
      form = <ContactForm />
    }

    return (
      // Component that will allow filter the list by name, or some other properties
      // <SearchInput />

      <div className='container'>

        <div className='row'>

          <div className={showForm ? 'col-sm-12 col-md-6' : 'col-sm-12'} style={{'overflowY': showForm ? 'scroll' : ''}}>
            <ListHeaderBar />
            <VisibleContactList />
          </div>

          <div className={showForm ? 'col-sm-12 col-md-6' : 'col-sm-12'}>
            {form}
          </div>
        </div>
      </div>
    )
  }
}

export default MainSection
