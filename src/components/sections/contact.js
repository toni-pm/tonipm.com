import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Tada from 'react-reveal/Tada'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'

const StyledSection = styled.section`
  max-width: 900px;
`

const Form = styled.form`
  * {box-sizing: border-box;}

  input[type=text], input[type=email], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

  textarea {
    height: 150px;
    resize: none;
  }
`

const Contact = () => {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Fade bottom duration={800} easing='cubic-bezier(0.5, 0, 0, 1)' distance='50px'>
      <StyledSection id='contact'>
        <h2><Trans>Contact</Trans></h2>

        <div className='inner'>
          <Form name='contact' method='POST' data-netlify='true'>
            <input type='hidden' name='form-name' value='contact' />
            <label for='lname'><Trans>Name</Trans></label>
            <input type='text' id='lname' name='name' required placeholder={t('Name')} onChange={(e) => setName(e.target.value)} />

            <label for='lname'><Trans>Mail</Trans></label>
            <input type='email' id='lemail' name='email' required placeholder={t('Mail')} onChange={(e) => setMail(e.target.value)} />

            <label for='lsubject'><Trans>Subject</Trans></label>
            <input type='text' id='lsubject' name='subject' placeholder={t('Subject')} onChange={(e) => setSubject(e.target.value)} />

            <label for='txtmessage'><Trans>Message</Trans></label>
            <textarea id='txtmessage' name='message' required placeholder={t('Message')} onChange={(e) => setMessage(e.target.value)} />

            <Tada><button className='btn' type='submit'><Trans>Send message!</Trans></button></Tada>
          </Form>
        </div>
      </StyledSection>
    </Fade>
  )
}

export default Contact
