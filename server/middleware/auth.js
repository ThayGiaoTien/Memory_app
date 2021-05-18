// Middleware allows us to check if actions is correct then move to controller
import jwt, {decode} from 'jsonwebtoken';


const auth= async (req, res, next)=>{
    try{
        
        //Get token and check wether it's custom auth
        let token = req.headers.authorization.split(' ')[1];
        const isCustomAuth= token.length<500;

        // Decode data
        let decodedData; // The data we want to get from token itself

        if(token && isCustomAuth) {             // We are working with custom auth token
            decodedData= jwt.verify(token, 'test');
            req.userId= decodedData?.id;
        } else{
            decodeData= jwt.decode(token);   // We are working with google oauth token
            req.userId= decodedData?.sub;    // sub is id that differentitates every single google user
        }
        
        next();

    } catch(error){
        console.log(error);
    }
};

export default auth;