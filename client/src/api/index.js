import axios from 'axios';

/* Axios is a library that helps us make http requests to external resources. 
In our React applications we often need to retrieve data from external APIs so
 it can be displayed in our web pages. ... Axios uses methods like get() and post()
 that perform http GET and POST requests for retrieving or creating resources. */

const url='http://localhost:6969/posts';

export const fetchPosts=() =>axios.get(url);
export const createPost=(newPost)=> axios.post(url, newPost);
export const likePost=(id)=> axios.patch(`${url}/${id}/likePost`); //likePost- type of number
export const updatePost=(id, updatedPost)=> axios.patch(`${url}/${id}`, updatedPost);
export const deletePost=(id) => axios.delete(`${url}/${id}`);
