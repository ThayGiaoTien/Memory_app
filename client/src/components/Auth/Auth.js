import { Container, Typography, Grid, Paper, Button, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import GoogleLogin from 'react-google-login';
import React, {useState} from 'react';
import useStyles from './styles';
import Icon from './icon';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'; //change direct immediately



import Input from './input'; //make our app more dynamically

const Auth = () => {
    const classes= useStyles();
    const [showPassword, setShowPassword]= useState(false);
    const [isSignup, setIsSignup]= useState(false);
    const dispatch= useDispatch();
    const history= useHistory();


    const handleChange=()=>{
        
    };
    
    const handleSubmit=()=>{

    };
    const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword); //toggling it= turn on/off

    const switchMode=()=>setIsSignup((prevIsSignup)=>!prevIsSignup);

    const googleSuccess=async (res)=>{
        const  result= res?.profileObj;
        const token= res?.tokenId;
        try {
            dispatch({type:'AUTH', data:{ result, token}});
            history.push('/'); //back to da home
        } catch(error) {
            console.log(error);
        }
    };
    const googleFailure=(error)=>{
        console.log(error);
        console.log('Google Sign In was unseccessful. Try again later!');
    };

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />    
                </Avatar>
                <Typography variant='h5'>{isSignup? 'Sign Up':'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                    <Input name='lastName' label='Last Name' handleChange={handleChange} autoFocus half/>
                                </>
                            )
                            
                        }

                        <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword? 'text':'password'} handleShowPassword={handleShowPassword} />
                        
                        {
                            isSignup &&(
                                <Input name='confirmPassword' label='Repeat your password' handleChange={handleChange} type='password' />

                            )
                        }
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {isSignup? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                            clientId='121685091599-rsvndn81vhvcfoblo5d6vf6va8vv4vhs.apps.googleusercontent.com'
                            render={(renderProps)=>(
                                <Button className={classes.googleButton} 
                                color='primary' 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disable} 
                                startIcon={<Icon />} 
                                variant='contained'
                                >
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess= {googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy='single_host_origin'

                    />    
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup? "Already have an account? Sign in": "Don't have an account? Sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>

        </Container>
    )
}

export default Auth;
