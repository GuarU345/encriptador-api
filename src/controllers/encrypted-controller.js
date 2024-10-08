import { encryptedService } from "../services/encrypted-service.js"

const getEncryptedMessages = async(_req,res) => {
    try {
        const encryptedMessages = await encryptedService.getEncryptedMessages()
        res.json({encryptedMessages,status:true})
    } catch (error) {
        res.json({error:error.message,status:false})
    }
}

const encryptMessage = async(req,res) => {
    const body = req.body

    try {
        const newMessage = await encryptedService.encryptMessage(body)
        res.json({newMessage,status:true})
    } catch (error) {
        res.json({error:error.message,status:false})
    }
}

const desencryptMessage = async(req,res) => {
    const body = req.body
    try {
        const desencryptedMessage = await encryptedService.desencryptMessage(body)
        res.json({desencryptedMessage,status:true})
    } catch (error) {
        res.json({error:error.message,status:false})
    }
}

export const encryptedController = {
    getEncryptedMessages,
    encryptMessage,
    desencryptMessage
}