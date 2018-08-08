import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import Contact from './Contact'

import asset1 from '../assets/faces/1.jpg';

const setup = ({detailMode = true, isSelected = true}) => {
  const props = {
    contact: {
      id: 1,
      firstName : 'Test',
      lastName : 'User',
      tel: '123-456-789',
      email: 'test.user@example.com',
      avatarUrl: asset1
    },
    detailMode: detailMode,
    isSelected: isSelected,
    onEditContactClick: jest.fn()
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

const getTextContent = elem => {
  const children = Array.isArray(elem.props.children) ?
    elem.props.children : [ elem.props.children ]

  return children.reduce((out, child) =>
      // Concatenate the text
      // Children are either elements or text strings
    out + (child.props ? getTextContent(child) : child)
    , '')
}


describe('Contact component', () => {
    it('detail mode initial render', () => {
      const { output } = setup({})

      expect(output.type).toBe('li')
      expect(output.props.className).toEqual('contact col-sm-12 detail selected')

      const media = output.props.children
      expect(media.type).toBe('div')
      expect(media.props.className).toBe('media')

      const [ img, mediaBody ] = media.props.children

      expect(img.type).toBe('img')
      expect(img.props.className).toBe('media-object pull-left')

      expect(mediaBody.type).toBe('div')
      expect(mediaBody.props.className).toBe('media-body')
    })

    it('mosaic mode initial render', () => {
      const { output } = setup({detailMode: false, isSelected: false})

      expect(output.type).toBe('li')
      expect(output.props.className).toEqual('contact col-md-6 mosaic')

      const media = output.props.children
      expect(media.type).toBe('div')
      expect(media.props.className).toBe('media')

      const [ thumbnail, mediaBody ] = media.props.children

      expect(thumbnail.type).toBe('div')
      expect(thumbnail.props.className).toBe('thumbnail pull-left')

      expect(mediaBody.type).toBe('div')
      expect(mediaBody.props.className).toBe('media-body')
    })

    it('li onCLick should call handleEditClick', () => {
      const { output, props } = setup({})

      const input = output.props.children.props.children[0]
      output.props.onClick({preventDefault: jest.fn(), stopPropagation: jest.fn()})
      expect(props.onEditContactClick).toBeCalled()
    })
  })


