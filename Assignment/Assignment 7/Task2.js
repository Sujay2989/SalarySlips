import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserForm = (props) => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleClick = () => {
        const submittedList = [...props.submittedList , name, email]
        props.setSubmittedList(submittedList)
    }
  return (
    <div>
       <TextField
          required
          id="outlined-required"
          label="Name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <Button variant="contained" onClick={handleClick}>Submit</Button>
    </div>
  )
}

export default UserForm 
