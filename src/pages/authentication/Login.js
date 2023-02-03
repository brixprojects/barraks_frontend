import React from 'react'
import { Avatar, Button, Grid, Paper, Typography, Link } from '@mui/material/';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import GoogleIcon from '../assets/btn.png';
import TextField from '@mui/material/TextField';
// import Brix from '../assets/Me.jpg';



const Login=()=>{


    const paperStyle={padding :20,height:'50vh',width:400, margin:"20px auto",}
    const btnstyle={margin: '8px 0',}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align= 'center'>
                <h1> Hi, Welcome Back</h1>
                {/* <Avatar alt src={Brix}/> */}
                </Grid>
                <p>Email Address
                <TextField  placeholder='Email Address' variant="outlined" fullWidth required/>
                </p>
                <p>Password
                <TextField  placeholder='Password' variant="outlined" type='password' fullWidth required/>
                </p>
                <FormControlLabel 
                control={
                <Checkbox
                name="checked"
                color='primary' 
                />
            } 
            label="Remember Me" 
            />
            <Typography >  
                <Link href="#" >
                Forgot Password
                </Link>
            </Typography>
            <Button type='submit' color='primary' variant="contained" style={btnstyle}fullWidth>Sign In</Button>
            <Typography>
            Do You Have An Account?
            </Typography>
            <Typography>
                <Link href="#">
                Sign Up 
                </Link>
            </Typography>
            {/* <Button  type='submit' style={btnstyle}><img src={GoogleIcon}/></Button> */}
            
                </Paper>
        </Grid>
    )
}
export default Login;