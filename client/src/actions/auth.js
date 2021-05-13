import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signin=(formData, history)=>async(dispatch) =>{  //redux-thunk
    try{
        //log in the user
        history.push('/');
        
    } catch(error){
        console.log(error);
    }

};

export const signup=(formData, history)=>async(dispatch)=>{
    try{
        //sign up the user
        history.push('/');
    } catch(error){
        console.log(error);
    }

};