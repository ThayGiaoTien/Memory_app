import React , { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; //use for JSX structure
import { useDispatch } from 'react-redux'; // this allows us to dispatch an action

import { getPosts } from './actions/posts';
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

import useStyles from './styles'; //use style to make web prettier

const App=() =>{
    const [currentId, setCurrentId] = useState(null);
    const classes= useStyles(); // declare here to add style to AppBar, Typography-heading, img-image by setting className
    const dispatch= useDispatch(); // we need to find the way where we actually going to 
    //dispatch the action and the best way is inside of useEffect
    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId,dispatch]);
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className= {classes.image} src= {memories} alt='memories' height='60 ' ></img>
            </AppBar>
            <Grow in >
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            < Posts setCurrentId= {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;