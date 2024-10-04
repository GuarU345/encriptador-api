import { Router } from "express";
import { encryptedController } from "./controllers/encrypted-controller.js";
import { authController } from "./controllers/auth-controller.js";

export const router = Router()

router.get('/test',(_req,res) => {
    res.json({message:'server on'})
})

router.get('/message',encryptedController.getEncryptedMessages)
router.post('/message/encrypt',encryptedController.encryptMessage)
router.post('/message/desencrypt',encryptedController.desencryptMessage)
router.post('/auth/login',authController.login)
router.post('/auth/register',authController.register)