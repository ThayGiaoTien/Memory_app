import React  from 'react';
import { Container } from '@material-ui/core'; //use for JSX structure
//import { useDispatch } from 'react-redux'; // this allows us to dispatch an action
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

//import { getPosts } from './actions/posts';
//import memories from './images/memories.png';
//import Form from './components/Form/Form';
//import Posts from './components/Posts/Posts';

//import useStyles from './styles'; //use style to make web prettier
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

/* To fix error: Invariant failed: You should not use <Link> outside a <Router>
We need to wrap everything inside BrowserRouter and use Switch and Routes inside Switch */

const App=() =>{
    const user= JSON.parse(localStorage.getItem('profile'));
    return (
        <BrowserRouter>
        <Container maxWidth='xl'>
            <Navbar />
            <Switch>
                <Route path='/' exact component={()=> <Redirect to='/posts' />} />
                <Route path='/posts' exact component={Home}/>
                <Route path='/posts/search' exact component={Home}/>
                <Route path='/posts/:id' exact component={PostDetails}/>
                <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
            </Switch>
            
        </Container>
        </BrowserRouter>
    )
};

    /*const [currentId, setCurrentId] = useState(null);
    const classes= useStyles(); // declare here to add style to AppBar, Typography-heading, img-image by setting className
    const dispatch= useDispatch(); // we need to find the way where we actually going to 
    //dispatch the action and the best way is inside of useEffect
    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId,dispatch]); */
    
       
        



export default App;