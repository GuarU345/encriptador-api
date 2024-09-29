import { authService } from "../services/auth-service.js";

const login = async (req, res) => {    
    const body = req.body

    try {
        const userLogin = await authService.login(body)
        res.json({message:"Sesión Iniciada",user : userLogin})
    } catch (error) {
        res.json({error:error.message})
    }
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