import { encryptedService } from "../services/encrypted-service.js"

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
    encryptMessage,
    desencryptMessage
}