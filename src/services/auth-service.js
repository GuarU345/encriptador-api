import { prisma } from '../lib/prisma.js'
import  bcrypt  from 'bcryptjs'

const register = async (body) => {
    const {name, email, password} = body

    const hashedPassword = await bcrypt.hash(password, 10)

    const registeredEmail = await prisma.user.findUnique({
        where:{
            email
        },
    })
    if(registeredEmail){
        throw new Error("El correo ya está registrado")
    }

    if(!name || !email || !password){
        throw new Error('Llenalo todo culero')
    }

    const newUser = await prisma.user.create({
        data:{
            name,
            email,
            password : hashedPassword
        }
    })

    return newUser
}

const login = async (body) => {
    const {email, password} = body

    const user = await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(!user){
        throw new Error(`El correo no está registrado`)
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if(!isPasswordCorrect){
        throw new Error('Credenciales incorrectas, ya te cargó la verga')
    }

    
    return user
}



export const authService = {
    register, 
    login
}