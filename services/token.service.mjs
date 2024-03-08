import Jwt from "jsonwebtoken";

export const generateToken = (userId) =>{
    payload = {
        user: {
          id: user.id
        }
    }
    const authToken = Jwt.sign(payload, JWT_SECRET);
} 

// export const tokenService = { generateToken }