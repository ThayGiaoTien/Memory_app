import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

const router= express.Router(); 

export const getPosts= async (req, res)=>{
    try{
        const postMessages= await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getPost= async (req, res)=>{
    const {id}= req.params;
    try{
        const post=await PostMessage.findById(id);
        res.status(200).json(post);
    } catch (error){
        res.status(404).json({message: error.message});
    }
    
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
export const updatePost=async (req, res)=>{
    const {id}= req.params;
    const { title, message, creator, selectedFile, tags}= req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id:${id}`);
    const updatedPost= {title, creator, message, selectedFile, tags, _id: id};
    await PostMessage.findByIdAndUpdate(id, updatedPost, {new: true});
    res.json(updatedPost);
}
export const deletePost= async (req, res)=>{
    const {id}= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id:${id}`);
    await PostMessage.findByIdAndRemove(id);
    res.json({message: 'This post deleted successfully!'});

}

export const likePost= async (req, res)=>{
    const {id} = req.params;

    if(!req.userId) return res.json({message: 'Unauthenticated'});

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id:${id}`);
    const post = await PostMessage.findById(id);
    
    const index= post.likes.findIndex((id)=> id===String(req.userId));
    if (index===-1){
        post.likes.push(req.userId);
    } else {
        post.likes= post.likes.filter((id)=>id!==String(req.userId));
    }
    
    const updatedPost= await PostMessage.findByIdAndUpdate(id, post , {new: true});    // oke! let's move on to the front end to complete JWT login frontend
    res.json(updatedPost);
}

export default router;
