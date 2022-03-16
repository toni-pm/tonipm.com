import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  * {box-sizing: border-box;}

  input[type=text], input[type=mail], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

  input[type=submit] {
    background-color: #04AA6D;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  textarea {
    height: 150px;
    resize: none;
  }
`

const Contact = () => {
  return (
    <div id='contact'>
      <h2>Contact</h2>

      <div className='inner'>
        <Form>
          <label for="lname">Name</label>
          <input type="text" id="lname" name="name" placeholder="Name" />

          <label for="lname">Mail</label>
          <input type="mail" id="lemail" name="email" placeholder="Email" />

          <label for="lsubject">Subject</label>
          <input type="text" id="lsubject" name="subject" placeholder="Subject" />

          <label for="txtmessage">Message</label>
          <textarea id="txtmessage" name="message" placeholder="Message"></textarea>

          <input type="submit" value="Send message!" />
        </Form>
      </div>
    </div>
  )
}

export default Contact
