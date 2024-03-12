import { Models } from '../models/index.mjs';

const { User } = Models;

export const GetUserList = async(data)=>{
    try {
        let userList = await User.aggregate(data,
            {
              $diskUsage: {
                computeDiskUsage: true
              }
            });
        return userList;
    } catch (error) {
        return error
    }      
}