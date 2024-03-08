import { authService } from '../services/index.mjs';

export const login = async(req, res)=>{
    let success = false;
    let msg;
    let user = await authService.loginUserByEmailAndPassword(req.body);
    if(user){        
        msg = 'User login.';
        success = true;
        res.status(200).send({ data: user, success, msg });
    }else{        
        msg = 'User not found.';
        success = false;        
        res.status(200).send({ success, msg });
    }
}

export const registerUser = async(req, res)=>{        
    let success = false;
    let msg;
    let user = await authService.registerUser(req.body);
    if(user){
        console.log(user);
        msg = 'User login.';
        success = true;
        res.status(200).send({ data: user, success, msg });
    }else{
        console.log(user);
        msg = 'User not found.';
        success = false;        
        res.status(200).send({ success, msg });
    }
    
}