import { authService } from "../services/auth-service.js";
import jwt from 'jsonwebtoken'


const login = async (req, res) => {    
    const body = req.body

    try {
        const userLogin = await authService.login(body)
        
        const token = jwt.sign({user : userLogin}, process.env.JWT_SECRET, {
            expiresIn: '1h',
        })
        res.json({message:"Sesión Iniciada",user : userLogin.name, token})

    } catch (error) {
        res.json({error:error.message})
    }

    return token
}

const register = async (req, res) => {
    const body = req.body

    try {
        const newUser = await authService.register(body)
        res.json(newUser)
    } catch (error) {
        res.json({error:error.message})
    }
}

export const authController = {
    login,
    register,
}