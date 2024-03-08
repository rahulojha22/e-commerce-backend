import { Models } from '../models/index.mjs';

const { Sidebar } = Models;

export const getSidebarByUserId = async(data)=>{
    try {
        const list = await Sidebar.findOne({userEmail: data.email, userPassword: data.password});        
        return list;   
    } catch (error) {
        return error
    }    
}

export const CreateSidebar = async(data)=>{    
    try {
        let createdRow = await Sidebar.create(data);
        return createdRow;
    } catch (error) {
        return error
    }      
}

export const GetSidebarList = async(data)=>{    
    try {
        let sidebarList = await Sidebar.aggregate(data,
            {
              $diskUsage: {
                computeDiskUsage: true
              }
            });
        return sidebarList;
    } catch (error) {
        return error
    }      
}

export const GetUserSidebarList = async(data)=>{    
    try {
        let sidebarList = await Sidebar.aggregate(data,
            {
              $diskUsage: {
                computeDiskUsage: true
              }
            });
        return sidebarList;
    } catch (error) {
        return error
    }      
}