import express from 'express'
import { createSnippet, getsnippets} from '../controllers/snippet.js';

const router=express.Router();

router.post("/",createSnippet)
router.get("/",getsnippets)

export default router;