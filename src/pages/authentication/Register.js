import React from 'react'
import { Avatar, Button, Grid, Paper, Typography, Link } from '@mui/material/';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import GoogleIcon from '../assets/btn.png';
import TextField from '@mui/material/TextField';
// import Brix from '../assets/Me.jpg';



const Register=()=>{


    const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
    const btnstyle={margin: '8px 0',}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align= 'center'>
                <h1> Sign Up!</h1>
                {/* <Avatar alt src={Brix}/> */}
                </Grid>
                <p>Email Address
                <TextField  placeholder='Email Address' variant="outlined" fullWidth required/>
                </p>
                <p>Password
                <TextField  placeholder='Password' variant="outlined" type='password' fullWidth required/>
                </p>
                <p>Contact Number
                <TextField  placeholder='Contact Number' variant="outlined" fullWidth required/>
                </p>
                <p>Complete Address
                <TextField  placeholder='Complete Address' variant="outlined" fullWidth required/>
                </p>
               
                <p>Gender</p><FormControlLabel
                control={
                <Checkbox
                name="checked"
                color='primary' 
                />
            } 
            label="Male"
            />
            <FormControlLabel 
                control={
                <Checkbox
                name="checked"
                color='primary' 
                />
            } 
            label="Female" 
            />

            <Button type='submit' color='primary' variant="contained" style={btnstyle}fullWidth>Sign Up</Button>
            <Typography>
            Do You Have An Account?
            </Typography>
            <Typography>
                <Link href="#">
                Sign In 
                </Link>
            </Typography>
            {/* <Button  type='submit' style={btnstyle}><img src={GoogleIcon}/></Button> */}
            
                </Paper>
        </Grid>
    )
}
export default Register;