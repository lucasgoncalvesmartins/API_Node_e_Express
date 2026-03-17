import express from 'express'
import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient()

const router = express.Router()

router.get('/listar-usuarios', async(req, res) => {

    try{
        const users = await prisma.user.findMany({ omit: {password: true}})

        res.status(200).json({message: "Usuarios listados com sucesso", users})



    }
    catch (e) {
    console.log("DETALHE DO ERRO:", e); 
    res.status(500).json({ message: "Erro no servidor, tente novamente" });
    }


})


export default router

