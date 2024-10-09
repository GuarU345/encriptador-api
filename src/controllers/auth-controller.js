import { authService } from "../services/auth-service.js";
import jwt from 'jsonwebtoken'


const login = async (req, res) => {    
    const body = req.body

    try {
        const userLogin = await authService.login(body)
        
        const token = jwt.sign({user : userLogin}, process.env.JWT_SECRET)
        res.json({message:"Sesión Iniciada",user : userLogin.name, token,status:true})

    } catch (error) {
        res.json({error:error.message,status:false})
    }

    return token
}

const register = async (req, res) => {
    const body = req.body

    try {
        const newUser = await authService.register(body)
        res.json({newUser,status:true})
    } catch (error) {
        res.json({error:error.message,status:false})
    }
}

export const authController = {
    login,
    register,
}