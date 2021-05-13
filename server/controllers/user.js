import bcrypt from 'bcryptjs'; //bcrypt is used to hash password
import jwt from 'jsonwebtoken'; //store the users in a browser for some period of time

import User from '../models/user.js';

export const signin= async(req, res)=>{
    // Get the email and password from Form(frontent)
    const {email, password}= req.body;
    try{
        // Check user is existing by emial
        const existingUser= await User.findOne(email);
        if(!existingUser) return res.status(404).json({message:"User dosen't exist!"});

        // Check is correcting password comparing using bcrypt
        const isPasswordCorrect= await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message:"Invalid password!"});

        // Creat token by jwt.sign ( in here, result is existingUser, so we don't need to create result)
        const token= jwt.sign({email:existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1h"}); //'test' is secret key

        //return the existing user and token
        res.status(200).json({result: existingUser, token});

    } catch(error){
        res.status(500).json({message: "Fuck! Something went wrong!"});
        // Underfined server error
    }
};

export const signup = async(req, res)=>{
    // Get data from front end
    const {email, password, confirmPassword, firstName, lastName } = req.body;
    try{
        // Check if user is exists
        const existingUser= await User.findOne(email);
        if (existingUser) return res.status(400).json({message: "User already exists."});
        // Check if confirmPassword is not correct
        if(password!==confirmPassword) return res.status(400).json({message: "Password is incorrect."});
        // Hash password
        const hashedPassword= await bcrypt.hash(password, 12); // salt=12
        // Creat result and token
        const result= await User.create({email, password: hashedPassword, name:`${firstName} ${lastName}`});
        const token= await jwt.sign({email:existingUser.email, id: existingUser._id}, test, {expiresIn: "1h"});
        // Return result and token
        res.status(200).json({result, token});

    } catch(error){
        res.status(500).json({message: 'Fuck! Something went wrong!'});

    }
}; 