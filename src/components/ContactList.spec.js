import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import ContactList from './ContactList'
import Contact from './Contact'
import { StyleSheetTestUtils } from 'aphrodite'

import asset1 from '../assets/faces/1.jpg'

const setup = ({detailMode = true, isSelected = true}) => {
  const contact = {
    id: 1,
    firstName: 'Test',
    lastName: 'User',
    tel: '123-456-789',
    email: 'test.user@example.com',
    avatarUrl: asset1
  }

  const props = {
    filteredContacts: [contact],
    selectedContact: contact,
    detailMode: detailMode,
    onContactClick: jest.fn()
  }

  const renderer = createRenderer()

  renderer.render(
    <ContactList {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('ContactList component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  it('should render ul', () => {
    const { output } = setup({})
    expect(output.type).toBe('ul')
    expect(output.props.className).toEqual('media-list row contactList_1p1zqo2')
  })

  it('should render Contacts', () => {
    const { output, props } = setup({})
    expect(output.props.children.length).toBe(1)
    output.props.children.forEach((contact, i) => {
      expect(contact.type).toBe(Contact)
      expect(Number(contact.key)).toBe(props.filteredContacts[i].id)
      expect(contact.props.contact).toBe(props.filteredContacts[i])
    })
  })
})
