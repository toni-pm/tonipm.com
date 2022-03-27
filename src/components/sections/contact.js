import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Tada from 'react-reveal/Tada'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'

const StyledSection = styled.section`
  max-width: 900px;

  .success, .error {
    margin: 50px 0;
    padding: 20px 30px;
    border-radius: var(--border-radius);
    display: inline-block;

    p {
      margin-bottom: 0;
    }
  }

  .success {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }

  .error {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;

    a {
      color: #a94442;
      font-weight: bold;

      :after {
        background: #a94442;
      }
    }
  }
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
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)
    const formData = new FormData()
    formData.append('name', name)
    formData.append('mail', mail)
    formData.append('subject', subject)
    formData.append('message', message)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(response => {
        if (response.ok) {
          setSuccess(true)
        } else {
          throw new Error()
        }
      }
      )
      .catch(err => setError(true))
  }

  return (
    <Fade bottom duration={800} easing='cubic-bezier(0.5, 0, 0, 1)' distance='50px'>
      <StyledSection id='contact'>
        <h2><Trans>Contact</Trans></h2>

        <div className='inner'>
          <Form name='contact' onSubmit={handleSubmit} method='POST' data-netlify='true'>
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
          {success &&
            <div className='success'>
              <h3><Trans>Thank you!</Trans></h3>
              <p><Trans>Your form submission has been received.</Trans></p>
            </div>}

          {error &&
            <div className='error'>
              <h3><Trans>There seems to be an error.</Trans></h3>
              <p><Trans>Please try again later or send me an email directly at</Trans> <a className='default' href='mailto:toniperairam@gmail.com'>toniperairam@gmail.com</a>.</p>
            </div>}
        </div>
      </StyledSection>
    </Fade>
  )
}

export default Contact
