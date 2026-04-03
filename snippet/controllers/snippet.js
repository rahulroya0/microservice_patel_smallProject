import { snippets } from "../database/index.js"
import crypto from "node:crypto";

export const createSnippet=(req,res)=>{
   const id=crypto.randomBytes(4).toString("hex")
   const {title,code}=req.body;

   // creating a snippets
   snippets[id]={
    id,
    title,
    code
   }

   return res.status(201).json({
    success:true,
    snippets:snippets[id],
    message:"snippets created successfully"
   })
}

export const getsnippets=(req,res)=>{
    return res.status(200).json(snippets);
}