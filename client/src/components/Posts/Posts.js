import React from 'react';

// we have to somehow fetch data from that global redux store with using useSelector
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({setCurrentId})=>{
    // Fetching data in the post
    const posts= useSelector((state)=> state.posts); // this is linking to reducers/index.js

    const classes= useStyles();
    //console.log(posts);
    return (
        !posts.length? <CircularProgress /> : (
            <Grid className= {classes.container} container alignItems='stretch' spacing >
                {posts.map((post)=>(                                                    //mapping posts to every single post
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;