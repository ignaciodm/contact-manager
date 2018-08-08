import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import ContactForm from './ContactForm'

import asset1 from '../assets/faces/1.jpg';

const getTextContent = elem => {
  const children = Array.isArray(elem.props.children) ?
    elem.props.children : [elem.props.children]

  return children.reduce((out, child) =>
      // Concatenate the text
      // Children are either elements or text strings
    out + (child.props ? getTextContent(child) : child)
    , '')
}

const contact = {
  id: 1,
  firstName : 'Test',
  lastName : 'User',
  tel: '123-456-789',
  email: 'test.user@example.com',
  avatarUrl: asset1
}

const newContact = {
  firstName: '',
  lastName: '',
  tel: '',
  email: ''
}

const setup = ({isEditing = true}) => {
  const props = {
    contact: isEditing ? contact : newContact,
    isEditing: isEditing,
    onSubmit: jest.fn(),
    onCancel: jest.fn()
  }

  const renderer = createRenderer()

  renderer.render(
    <ContactForm {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('ContactForm component', () => {
  it('edit initial render', () => {
    const { output } = setup({})

    expect(output.type).toBe('div')
    expect(output.props.className).toEqual("contact-form card row")

    const [cardHeader, cardBody] = output.props.children
    expect(cardHeader.type).toBe('h4')
    expect(getTextContent(cardHeader)).toBe('Edit Contact')

    expect(cardBody.type).toBe('form')

    const [firstNameGroup, lastNameGroup, emailGroup, phoneGroup, buttonGroups] = cardBody.props.children

    const [primaryButton, cancelButton] = buttonGroups.props.children.props.children

    expect(firstNameGroup.props.value).toBe(contact.firstName)
    expect(lastNameGroup.props.value).toBe(contact.lastName)
    expect(emailGroup.props.value).toBe(contact.email)
    expect(phoneGroup.props.value).toBe(contact.tel)
    expect(getTextContent(primaryButton)).toBe('Update Contact')
    // const attrs = ['firstName', 'lastName', 'email', 'tel']
    // cardBody.props.children.forEach((fieldGroup, i) => {
    //   let valueForField = contact[attrs[i]]
    //   expect(fieldGroup.props.value).toBe(valueForField)
    //   // expect(contact.props.contact).toBe(props.filteredContacts[i])
    // })
  })

  it('new contact initial render', () => {
    const { output } = setup({isEditing: false })

    expect(output.type).toBe('div')
    expect(output.props.className).toEqual("contact-form card row")

    const [cardHeader, cardBody] = output.props.children
    expect(cardHeader.type).toBe('h4')
    expect(getTextContent(cardHeader)).toBe('Add Contact')

    expect(cardBody.type).toBe('form')

    const [firstNameGroup, lastNameGroup, emailGroup, phoneGroup, buttonGroups] = cardBody.props.children
    const [primaryButton, cancelButton] = buttonGroups.props.children.props.children

    expect(firstNameGroup.props.value).toBe(newContact.firstName)
    expect(lastNameGroup.props.value).toBe(newContact.lastName)
    expect(emailGroup.props.value).toBe(newContact.email)
    expect(phoneGroup.props.value).toBe(newContact.tel)
    expect(getTextContent(primaryButton)).toBe('Add Contact')

    // const attrs = ['firstName', 'lastName', 'email', 'tel']
    // cardBody.props.children.forEach((fieldGroup, i) => {
    //   let valueForField = contact[attrs[i]]
    //   expect(fieldGroup.props.value).toBe(valueForField)
    //   // expect(contact.props.contact).toBe(props.filteredContacts[i])
    // })
  })
})

