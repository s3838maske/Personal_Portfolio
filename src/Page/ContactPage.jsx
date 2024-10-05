import React from 'react'
import TitleBox from '../Components/Common/TitleBox'
import Contact from '../Container/Contact'

function ContactPage() {
  return (
    <div className='section container'>
        <TitleBox>
          <h1 className="text-center section-title">Contact us</h1>
        </TitleBox>
        <Contact />
    </div>
  )
}

export default ContactPage