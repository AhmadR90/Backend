import express from "express";
const router = express.Router();
import { createUser, getAllUser } from "../Controllers/userController.js";

router.post("/create", createUser);
router.get("/getAll", getAllUser);

export default router;
