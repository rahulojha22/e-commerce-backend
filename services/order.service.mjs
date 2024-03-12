import { Models } from '../models/index.mjs';

const { Sidebar } = Models;

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

export const UpdateSidebar = async(data)=>{    
    try {
        let updateRow = await Sidebar.updateOne(data);
        return updateRow;
    } catch (error) {
        return error
    }      
}

export const DeleteSidebar = async(data)=>{    
    try {
        let deleteRow = await Sidebar.deleteOne(data);
        return deleteRow;
    } catch (error) {
        return error
    }      
}