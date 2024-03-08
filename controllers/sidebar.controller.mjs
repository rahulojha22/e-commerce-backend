import { sidebarService } from '../services/index.mjs';

export const createSidebarMenu = async(req, res)=>{
    let postdata = req.body;
    let success = false;
    let msg;
    try {        
        let data = await sidebarService.CreateSidebar(postdata);
        if(data){        
            msg = 'Sidebar created.';
            success = true;
            res.status(200).send({ data, success, msg });
        }else{        
            msg = 'Sidebar not created.';
            success = false;        
            res.status(200).send({ success, msg });
        }
    } catch (error) {
        msg = 'Eror';
        res.status(500).send({ error, success, msg })
    }   
}

export const getSidebarMenuList = async(req, res)=>{
    let postdata = req.body;
    let success = false;
    let msg;
    try {        
        let data = await sidebarService.GetSidebarList(postdata.condition);
        if(data){        
            msg = 'Sidebar menu list.';
            success = true;
            res.status(200).send({ data, success, msg });
        }else{        
            msg = 'Sidebar menu not found.';
            success = false;        
            res.status(200).send({ success, msg });
        }
    } catch (error) {
        msg = 'Eror';
        res.status(500).send({ error, success, msg })
    }   
}

export const getUserSidebarMenuList = async(req, res)=>{
    let postdata = req.body;
    let success = false;
    let msg;
    try {        
        let data = await sidebarService.GetUserSidebarList(postdata.condition);
        if(data){        
            msg = 'Sidebar menu list.';
            success = true;
            res.status(200).send({ data, success, msg });
        }else{        
            msg = 'Sidebar menu not found.';
            success = false;        
            res.status(200).send({ success, msg });
        }
    } catch (error) {
        msg = 'Eror';
        res.status(500).send({ error, success, msg })
    }   
}