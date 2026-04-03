import crypto from "node:crypto";
import { commentsDB } from "../database/index.js";

export const createComment=(req,res)=>{
    const commentId=crypto.randomBytes(4).toString("hex")
    const {text}=req.body;

    const snippetId=req.params.id;
    const comments= commentsDB[snippetId] || [];

    // create comments
    comments.push({
        commentId,
        text
    })
    commentsDB[snippetId]=comments;

    return res.status(201).json({
        success:true,
        comment:{commentId,text},
        message:"comment created successfully"
    })
}

export const getCommentBySnippetId=(req,res)=>{
    const snippetId=req.params.id;

    return res.status(200).json({
        success:true,
        comments:commentsDB[snippetId] || []
    })
}