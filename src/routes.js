import { Router } from "express";

export const router = Router()

router.get('/test',(_req,res) => {
    res.json({message:'server on'})
})