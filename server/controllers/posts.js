import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

const router= express.Router(); 

export const getPosts= async (req, res)=>{
    try{
        const postMessage= await PostMessage.find();
        console.log(postMessage);
        res.status(200).json(postMessage);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getPost= (req, res)=>{
    res.send('This work!');
}

export const createPost= async (req, res)=>{
    const post = req.body;
    const newPost= new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}
export const updatePost= (req, res)=>{
    res.send('this work');
}
export const deletePost= (req, res)=>{
    res.send('this work');
}

export const likePost= (req, res)=>{
    res.send('this work');
}

export default router;
