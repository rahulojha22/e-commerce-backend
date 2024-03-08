import { Models } from '../models/index.mjs';

const { User } = Models;

export const loginUserByEmailAndPassword = async(data)=>{
    try {
        let user = await User.findOne({userEmail: data.email, userPassword: data.password});        
        return user;   
    } catch (error) {
        return error
    }    
}

export const registerUser = async(data)=>{    
    let user = await User.create(data);
    return user;
}