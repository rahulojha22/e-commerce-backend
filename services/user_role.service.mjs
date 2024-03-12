import { Models } from "../models/index.mjs";

const { UserRole } = Models;

export const CreateUserRole = async(data)=>{    
    try {
        let createdRow = await UserRole.create(data);
        return createdRow;
    } catch (error) {
        return error
    }      
}

export const GetUserRoleList = async(data)=>{
    try {
        let list = await UserRole.aggregate(data,
            {
              $diskUsage: {
                computeDiskUsage: true
              }
            });
        return list;   
    } catch (error) {
        return error
    }    
}