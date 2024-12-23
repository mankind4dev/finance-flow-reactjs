import express from "express"
import { test, update } from "../controllers/users.controller.js"

const router = express.Router()

router.get("/test", test)
router.put("/update/:id", update)

export default router