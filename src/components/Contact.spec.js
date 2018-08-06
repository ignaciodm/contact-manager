import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import Contact from './Contact'

import asset1 from '../assets/faces/1.jpg';

const setup = ( ) => {
  const props = {
    contact: {
      id: 1,
      name : 'Terrence S. Hatfield',
      tel: '651-603-1723',
      email: 'TerrenceSHatfield@rhyta.com',
      avatarUrl: asset1
    }
    // editContact: jest.fn(),
    // deleteContact: jest.fn()
  }

  const renderer = createRenderer()

  renderer.render(
    <Contact {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Contact', () => {
    it('initial render', () => {
      const { output } = setup()

      expect(output.type).toBe('li')
      expect(output.props.className).toBeUndefined()

      const [ thumbnailDiv, headingDiv, bodyDiv ] = output.props.children

      expect(thumbnailDiv.type).toBe('div')
      expect(thumbnailDiv.props.className).toBe('thumbnail')

      expect(headingDiv.type).toBe('div')
      expect(headingDiv.props.className).toBe('media-heading')

      expect(bodyDiv.type).toBe('div')
      expect(bodyDiv.props.className).toBe('media-body')
    })

  })
})
