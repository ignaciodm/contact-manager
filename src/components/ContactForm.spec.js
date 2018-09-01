import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import ContactForm from './ContactForm'

import asset1 from '../assets/faces/1.jpg'
import { StyleSheetTestUtils } from 'aphrodite'

const getTextContent = elem => {
  const children = Array.isArray(elem.props.children)
    ? elem.props.children : [elem.props.children]

  return children.reduce((out, child) =>
    // Concatenate the text
    // Children are either elements or text strings
    out + (child.props ? getTextContent(child) : child)
    , '')
}

const contact = {
  id: 1,
  firstName: 'Test',
  lastName: 'User',
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

  const [cardHeader, cardBody] = output.props.children
  const [firstNameGroup, lastNameGroup, emailGroup, phoneGroup, buttonGroups] = cardBody.props.children
  const [primaryButton] = buttonGroups.props.children.props.children

  return {
    props: props,
    output: output,
    renderer: renderer,
    cardHeader: cardHeader,
    cardBody: cardBody,
    firstNameGroup: firstNameGroup,
    lastNameGroup: lastNameGroup,
    emailGroup: emailGroup,
    phoneGroup: phoneGroup,
    buttonGroups: buttonGroups,
    primaryButton: primaryButton
  }
}

describe('ContactForm component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection()
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })

  describe('render', () => {
    it('should renders a div', () => {
      expect(setup({}).output.type).toBe('div')
    })

    it('should renders proper classes', () => {
      expect(setup({}).output.props.className).toEqual(expect.stringContaining('contact-form card row form'))
    })
  })

  describe('edit form mode', () => {
    it('should sets header title', () => {
      expect(getTextContent(setup({}).cardHeader)).toBe('Edit Contact')
    })

    it('should set a form as body' , () => {
      const { cardBody } = setup({})
      expect(cardBody.type).toBe('form')
    })

    it('should set input values', () => {
      const { firstNameGroup, lastNameGroup, emailGroup, phoneGroup} = setup({})

      expect(firstNameGroup.props.value).toBe(contact.firstName)
      expect(lastNameGroup.props.value).toBe(contact.lastName)
      expect(emailGroup.props.value).toBe(contact.email)
      expect(phoneGroup.props.value).toBe(contact.tel)
    })

    it('sets submit button text', () => {
      const {primaryButton} = setup({})
      expect(getTextContent(primaryButton)).toBe('Update Contact')
    })
  })

  describe('add new form', () => {
    it('should sets header title', () => {
      const { cardHeader } =  setup({ isEditing: false })
      expect(getTextContent(cardHeader)).toBe('Add Contact')
    })

    it('should set input values', () => {
      const { firstNameGroup, lastNameGroup, emailGroup, phoneGroup} = setup({ isEditing: false })

      expect(firstNameGroup.props.value).toBe(newContact.firstName)
      expect(lastNameGroup.props.value).toBe(newContact.lastName)
      expect(emailGroup.props.value).toBe(newContact.email)
      expect(phoneGroup.props.value).toBe(newContact.tel)
    })

    it('sets submit button text', () => {
      const {primaryButton} = setup({ isEditing: false })
      expect(getTextContent(primaryButton)).toBe('Add Contact')
    })
  })

  it('onSubmit should call handleSubmit with contact', () => {
    const { output, props } = setup({})
    const [, cardBody] = output.props.children

    cardBody.props.onSubmit({preventDefault: jest.fn()})
    expect(props.onSubmit).toBeCalledWith(contact)
  })

  it('on cancel click should call onCancel', () => {
    const { output, props } = setup({})
    const [, cardBody] = output.props.children
    const [, , , , buttonGroups] = cardBody.props.children
    const [, cancelButton] = buttonGroups.props.children.props.children

    cancelButton.props.onClick({preventDefault: jest.fn()})
    expect(props.onCancel).toBeCalled()
  })
})
