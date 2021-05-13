// Middleware allows us to check if actions is correct then move to controller
import jwt, {decode} from 'jsonwebtoken';

const auth= async (req, res, next)=>{
    try{
        //Get token and check wether it's custom auth
        const token= req.header.authorization.split("")[1];
        const isCustomAuth= token.length<500;

        // Decode data
        let decodeData;
        if(token && isCustomAuth) {             // We are working with custom auth token
            decodeData= jwt.verify(token, 'test'); //'test is secret key
            req.userId= decodeData?.indexOf;
        } else{
            decodeData= jwt.decode(token);   // We are working with google oauth token
            req.userId= decodeData?.sub;    // sub is id that differentitates every single google user
        }
        
        return next();

    } catch(error){
        console.log(error);
    }
};

export default auth;