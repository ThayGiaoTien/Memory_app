import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'; 
import bodyParse from 'body-parser';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';


// setup index.js 
const app= express();

app.use(bodyParse.json({limit: '30mb', extended: true}));
app.use(bodyParse.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

// use express middleware to connect this routes to our application
app.use('/posts', postRoutes); // this fixed issue about localhost because we need to specify the routes before specify the app
app.use('/user', userRoutes); 
// connect to mongoDB
const  CONNECTION_URL= "mongodb+srv://tiendepzai:Iloveyou13o7@cluster0.hwjgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT= process.env.PORT||6969;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false); // make sure that we don't get any warning in console

