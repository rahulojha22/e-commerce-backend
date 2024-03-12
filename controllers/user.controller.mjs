import { userService } from "../services/index.mjs";

export const getUserList = async(req, res)=>{
    let postdata = req.body;
    let success = false;
    let msg;
    try {        
        let data = await userService.GetUserList(postdata.condition);
        if(data){        
            msg = 'User list.';
            success = true;
            res.status(200).send({ data, success, msg });
        }else{        
            msg = 'User not found.';
            success = false;        
            res.status(200).send({ success, msg });
        }
    } catch (error) {
        msg = 'Eror';
        res.status(500).send({ error, success, msg })
    }   
}