import express from 'express'
import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient()

const router = express.Router()

router.post('/cadastro', (req, res) => {
    const user = req.body
    res.status(201).json(user)
})


export default router

