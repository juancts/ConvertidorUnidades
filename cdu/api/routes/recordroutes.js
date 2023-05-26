import { Router } from "express";

import{
    GET_conversions,
    POST_conversion

} from "./conversionhandlers.js"



const router = Router();

router.get("/", GET_conversions);
router.post("/post", POST_conversion);


export default router;