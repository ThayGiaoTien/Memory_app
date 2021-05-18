import mongoose from 'mongoose';

const postSchema= mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String, 
    /*likeCount:{
        type: Number,
        default: 0
    },*/
    likes:{
        type:[String],
        default: [],
    },
    createdAt:{
        type: Number,
        default: new Date(),
    },
});
const PostMessage= mongoose.model('PostMessage', postSchema);

export default PostMessage;