// export to ./index.js to combine
/*export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case FETCH_BY_SEARCH:
      return action.payload;
    
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
}; */ 

// to make the website more dymaically by using pagination, we need to edit reducers to view and render things

import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING} from '../constants/actionTypes';

export default (state = {isLoading: true, posts: []}, action) => { //now inside every action we need spread the state of posts
  switch (action.type) {
    case START_LOADING:
      return {...state, isLoading :true};
    case END_LOADING:
      return {...state, isLoading: false};
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
      
    case FETCH_BY_SEARCH:
      return {...state, posts: action.payload}; //look at this
    
    case LIKE:
      return {...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};
    case CREATE:
      return {...state, posts:[...state.posts, action.payload]};                      
    case UPDATE:
      return {...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};        // RENAME posts TO state because we already changed it in default.
    case DELETE:
      return {...state, posts: state.posts.filter((post) => post._id !== action.payload)};
    default:
      return state;
  }
};

// We changed constructors of state, now we need to restructor the state where we used it by useSelector

