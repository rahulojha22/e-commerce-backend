import { userRoleService } from "../services/index.mjs";

export const createUserRole = async(req, res)=>{
    let postdata = req.body;
    let success = false;
    let msg;
    try {        
        let data = await userRoleService.CreateUserRole(postdata.role);
        if(data){        
            msg = 'User role created.';
            success = true;
            res.status(200).send({ data, success, msg });
        }else{        
            msg = 'User role not created.';
            success = false;        
            res.status(200).send({ success, msg });
        }
    } catch (error) {
        msg = 'Eror';
        res.status(500).send({ error, success, msg })
    }   
}

export const getUserRoleList = async(req, res)=>{
    let postdata = req.body;
    let success = false;
    let msg;
    try {        
        let data = await userRoleService.GetUserRoleList(postdata.condition);
        if(data){        
            msg = 'User role list.';
            success = true;
            res.status(200).send({ data, success, msg });
        }else{        
            msg = 'User role list not found.';
            success = false;        
            res.status(200).send({ success, msg });
        }
    } catch (error) {
        msg = 'Eror';
        res.status(500).send({ error, success, msg })
    }   
}