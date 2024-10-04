import { decryptBinary, encryptToBinary } from "../utils.js"
import {prisma} from '../lib/prisma.js'

const getEncryptedMessages = async() => {
    try {
        const encryptedMessages = await prisma.encryptedData.findMany()
        return encryptedMessages
    } catch (error) {
        throw new Error('Error al tratar de consultar los mensajes encriptados')
    }
}

const encryptMessage = async(body) =>{
    const {message,secret,question} = body
    
    const encryptedMessage = encryptToBinary(message,secret)

    const data = {
        encryptedMessage,
        secret,
        question
    }

    const newEncryptedMessage = await prisma.encryptedData.create({
        data
    })

    return newEncryptedMessage
}

const desencryptMessage = async(body) => {
    const {id,secret} = body

    const encryptedMessage = await getEncryptedMessageById(id)

    const isTheSecret = await checkSecret(encryptedMessage,secret)

    if(!isTheSecret){
        return null
    }

    const desencryptedMessage = decryptBinary(isTheSecret.encryptedMessage,isTheSecret.secret)
    return desencryptedMessage
}

const getEncryptedMessageById = async(id) => {
    const encryptedMessage = await prisma.encryptedData.findUnique({
        where:{
            id
        }
    })

    if(!encryptedMessage){
        throw new Error('No se encontro ese mensaje encriptado')
    }

    return encryptedMessage
}

const checkSecret = async(encryptedData,secret) => {
    if(encryptedData.secret.toLowerCase() === secret.toLowerCase()){
        return encryptedData
    }else{
        return null
    }
}

export const encryptedService = {
    getEncryptedMessages,
    encryptMessage,
    desencryptMessage
}

