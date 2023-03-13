import React, { useContext } from 'react'
import { TextField, Box, Button } from '@mui/material'

const SignUp = () => {


  return (
    <div className="container" style={{marginTop:"50px",maxWidth:"800px"}}>
      <h2>Sign Up</h2>
      <br />
      <Box>
        <div>
          <TextField className="light"
            style={{width:"50%"}}
            required
            placeholder="Name"
          />
          <TextField
            className="light"
            style={{width:"50%"}}
            required
            placeholder="Surname"
          />
          <TextField
            className="light"
            style={{width:"50%"}}
            required
            placeholder="Email"
          />
          <TextField
            className="light"
            style={{width:"50%"}}
            required
            placeholder="Phone"
          />                              
          <br />
          <Button
            style={{marginTop:"20px",backgroundColor:"#E9E9E9",width:"100%",padding:"12px"}} className="light" variant="outlined" size="large"
          >Sign Up
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default SignUp