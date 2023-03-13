import React, { useContext, useState } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { userContext } from '../context/UserContext'

const User = () => {


    const [form, setForm] = useState([])
    const { user, setUser } = useContext(userContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm(prev=>{
            return  {
                ...prev, [name]:value
            }
        })

    }

    const handleSubmit = (e) => {
        setUser(prev=>form.name)
        setForm(prev=>"")
    }

  return (
    <div className="container" style={{marginTop:"50px",maxWidth:"800px"}}>{
        user ? 
        <div>
            {user}
            <br />
            <button onClick={()=>setUser("")}>Log Off</button>
        </div>
         :
         <div>
            <h2>Log In</h2>
            <br />
            <TextField
                className="light"
                style={{width:"50%"}}
                type="text"
                name="name"
                placeholder="Your name"
                onChange={handleChange}
            />
            <TextField
                className="light"
                style={{width:"50%"}}
                type="email"
                name="email"
                placeholder="Your email"
                onChange={handleChange}
            />
          <Button
            onClick={handleSubmit}
            style={{marginTop:"20px",backgroundColor:"#E9E9E9",width:"100%",padding:"12px"}} className="light" variant="outlined" size="large"
          >Log In
          </Button>
        </div>
    }
    </div>
  )
}

export default User