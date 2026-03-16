import express from 'express'
import bcrypt from 'bcrypt'

import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient()

const router = express.Router()

//rota de cadastro
router.post('/cadastro', async (req, res) => {
    const user = req.body

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)

    try{
    const userDb = await prisma.user.create({
        data:{
            email: user.email,
            name: user.name,
            password: hashPassword,
        }
    })


    res.status(201).json(userDb)
    }
    catch (e) {
    console.log("DETALHE DO ERRO:", e); 
    res.status(500).json({ message: "Erro no servidor, tente novamente" });
}
    
})

//login




export default router

