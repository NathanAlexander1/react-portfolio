import React, {useState} from 'react'
import { validateEmail } from '../utils/helpers';

function ContactInfo() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [reasonForMessage, setReasonForMessage]=useState("employment")
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(name==='') {
      setErrorMessage('Please enter your name')
      return;
    } else if(!validateEmail(email)) {
      setErrorMessage('Email not valid, please enter a valid email (xxxxxx@xxxxx.xxx)');
      return;
    } else if(message==='') {
      setErrorMessage(`I'd love to hear from you! Please enter a message!`);
      return;
    } else {
      setErrorMessage("")
    }
    setName('')
    setEmail('');
    setReasonForMessage("employment")
    setMessage('')
    alert(`
    Name: ${name}
    Email: ${email}
    Reason for message: ${reasonForMessage}
    Message: ${message}`);

    
  }

  return (
    <div>
      <h1>Contact me</h1>
      <form className="contact-form">
        <input name="name" placeholder="Please enter your name" value={name} onChange={e=>setName(e.target.value)}/>
        
        <input name="email" placeholder="Please enter your email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <select value={reasonForMessage} onChange={e=>setReasonForMessage(e.target.value)}>
          {/* refers to reasonForMessage */}
          <option value="employment">I am reaching out about an employment opportunity</option>
          <option value="question">I am reaching out with a specific question</option>
          <option value="networking">I am reaching out for networking purposes</option>
          <option value="other">Other</option>
        </select>
        <textarea name="message" placeholder="Please enter your message" value={message} onChange={e=>setMessage(e.target.value)}/>
        <button type="button" onClick={handleFormSubmit}>Send</button>
      </form>
      {errorMessage && (
      <div>
        <p className="error-text">{errorMessage}</p>
      </div>
    )}
    </div>
  )
}

export default ContactInfo