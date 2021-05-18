import React from 'react';
import { useState, useEffect } from 'react';// use useEffect to populates values of the Form
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'; 

import useStyles from './styles';
import {createPost, updatePost} from '../../actions/posts';

// Get the current id of the post 
const Form = ({currentId, setCurrentId})=>{
    const [postData, setPostData]= useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''

    });
    // we are going to fetch all the posts
    const post= useSelector((state)=>currentId ? state.posts.find((message)=> message._id=== currentId): null);   // ===
    
    const dispatch= useDispatch(); // this actually allows us to dispatch all actions. then go to handleSubmit
    const classes= useStyles();
    // We use localStorage.result.name instead of creator
    const user= JSON.parse(localStorage.getItem('profile'));
    
    // use useEffect to populates values of the Form
    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);
    
    const clear = () => {
        setCurrentId(0);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentId === 0) {
          dispatch(createPost({ ...postData, name: user?.result?.name }));
          console.log({...postData, name: user?.result?.name});
          clear();
        } else {
          dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
          clear();
        }
    };
    if (!user?.result?.name) {
        return (
          <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
              Please Sign In to create your own memories and like other's memories.
            </Typography>
          </Paper>
        );
    }
    
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant= 'h6'>{currentId ? 'Editing': 'Creating'} a Memory</Typography>
                
                <TextField 
                    name='title'
                    variant='outlined' 
                    label='Title' 
                    fullWidth
                    value={postData.title} 
                    onChange={(e)=> setPostData({ ...postData, title: e.target.value })}
                />
                <TextField 
                    name='message'
                    variant='outlined' 
                    label='Message' 
                    fullWidth
                    value={postData.message} 
                    onChange={(e)=> setPostData({ ...postData, message: e.target.value })}
                />
                <TextField 
                    name='tags'
                    variant='outlined' 
                    label='Tags' 
                    fullWidth
                    value={postData.tags} 
                    onChange={(e)=> setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
                <Button variant='contained' color='secondary' size='large' fullWidth onClick={clear}>Clear</Button>
                
            </form>

        </Paper>
    );
}

export default Form;