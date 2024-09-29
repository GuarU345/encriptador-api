import { Router } from "express";
import { encryptedController } from "./controllers/encrypted-controller.js";

export const router = Router()

router.get('/test',(_req,res) => {
    res.json({message:'server on'})
})

router.post('/message/encrypt',encryptedController.encryptMessage)
router.post('/message/desencrypt',encryptedController.desencryptMessage)