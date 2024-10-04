import { encryptedService } from "../services/encrypted-service.js"

const getEncryptedMessages = async(_req,res) => {
    try {
        const encryptedMessages = await encryptedService.getEncryptedMessages()
        res.json(encryptedMessages)
    } catch (error) {
        res.json({error:error.message})
    }
}

const encryptMessage = async(req,res) => {
    const body = req.body

    try {
        const newMessage = await encryptedService.encryptMessage(body)
        res.json(newMessage)
    } catch (error) {
        res.json({error:error.message})
    }
}

const desencryptMessage = async(req,res) => {
    const body = req.body
    try {
        const desencryptedMessage = await encryptedService.desencryptMessage(body)
        res.json({desencryptedMessage})
    } catch (error) {
        res.json({error:error.message})
    }
}

export const encryptedController = {
    getEncryptedMessages,
    encryptMessage,
    desencryptMessage
}