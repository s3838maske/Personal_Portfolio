import React from 'react'

function TitleBox(props) {
  return (
    <>
    <div className='gray-box'>
   {props.children}
    </div>
    </>
  )
}

export default TitleBox