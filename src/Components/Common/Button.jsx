import React from 'react'

function Button(props) {
  return (
    <button className='primary-btn' type="submit">{props.children}</button>
  )
}

export default Button