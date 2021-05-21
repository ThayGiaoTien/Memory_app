import React from 'react';

// we have to somehow fetch data from that global redux store with using useSelector
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({setCurrentId})=>{
    // Fetching data in the post
    const {posts}= useSelector((state)=> state.posts); // [] ==>{}  posts= action.payload which includes posts, currentPage, numberOfPage

        const classes= useStyles();
        //console.log(posts);
    return (
        !posts?.length? <CircularProgress /> : (                                          // put ?. to ensure not through an error if we have no posts
            <Grid className= {classes.container} container alignItems='stretch' spacing={3} >
                {posts.map((post)=>(                                                    //mapping posts to every single post
                    <Grid key={post._id} item xs={12} sm={12} md ={6} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;