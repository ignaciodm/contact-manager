import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    padding: 15,
    fontSize: 15,
    textAlign: 'left',
    textShadow: '0 1 0 rgba(0,0,0,.1)'
  },
  h1: {
    marginTop: 0
  },
  small: {
    display: 'inline-block',
    paddingLeft: '1.375rem',
    lineHeight: 'normal',
    textTransform: 'none',
    fontWeight: 400,
    fontSize: '55%'
  }
})

class Header extends React.Component {
  render () {
    return (
      <header className={css(styles.header)}>
        <div className='container row'>
          <h1 className={css(styles.h1)}>
            Contact Manager
            <small className={css(styles.small)}>Simple React/Redux example application</small>
          </h1>
        </div>
      </header>
    )
  }
}
export default Header
