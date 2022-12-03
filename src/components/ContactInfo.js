import React, {useState} from 'react'

function ContactInfo() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [reasonForMessage, setReasonForMessage]=useState("employment")
  const [message, setMessage] = useState("")


  return (
    <div>
      <h1>Contact me</h1>
      <form>
        <input name="name" placeholder="Please enter your name" value={name} onChange={e=>setName(e.target.value)}/>
        <input name="email" placeholder="Please enter your email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <select value={reasonForMessage} onChange={e=>setReasonForMessage(e.target.value)}>
          {/* refers to reasonForMessage */}
          <option value="employment">I am reaching out about an employment opportunity</option>
          <option value="question">I am reaching out with a specific question</option>
          <option value="employment">I am reaching out for networking purposes</option>
          <option value="other">Other</option>
        </select>
        <textarea name="message" placeholder="Please enter your message" value={message} onChange={e=>setMessage(e.target.value)}/>
        <button>Send</button>
      </form>

    </div>
  )
}

export default ContactInfo