import React , { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; //use for JSX structure
import { useDispatch } from 'react-redux'; // this allows us to dispatch an action
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { getPosts } from './actions/posts';
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

import useStyles from './styles'; //use style to make web prettier
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

/* To fix error: Invariant failed: You should not use <Link> outside a <Router>
We need to wrap everything inside BrowserRouter and use Switch and Routes inside Switch */

const App=() =>(
    /*const [currentId, setCurrentId] = useState(null);
    const classes= useStyles(); // declare here to add style to AppBar, Typography-heading, img-image by setting className
    const dispatch= useDispatch(); // we need to find the way where we actually going to 
    //dispatch the action and the best way is inside of useEffect
    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId,dispatch]); */
    
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/auth' exact component={Auth} />
                </Switch>
                
            </Container>
        </BrowserRouter>
        
);


export default App;