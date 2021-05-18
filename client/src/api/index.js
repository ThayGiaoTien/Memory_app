import axios from 'axios';


/* Axios is a library that helps us make http requests to external resources. 
In our React applications we often need to retrieve data from external APIs so
 it can be displayed in our web pages. ... Axios uses methods like get() and post()
 that perform http GET and POST requests for retrieving or creating resources. */

/*const url='http://localhost:6969/posts';

export const fetchPosts=() =>axios.get(url);
export const createPost=(newPost)=> axios.post(url, newPost);
export const likePost=(id)=> axios.patch(`${url}/${id}/likePost`); //likePost- type of number
export const updatePost=(id, updatedPost)=> axios.patch(`${url}/${id}`, updatedPost);
export const deletePost=(id) => axios.delete(`${url}/${id}`);*/

const API= axios.create({ baseURL: 'http://localhost:6969' });
// Function that happens with each one of our requests, which send our token back to our backend 
//so that the backend middleware can verify that we are actually logged in
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token} `;
    }
    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);


//dit me sao ko cho push