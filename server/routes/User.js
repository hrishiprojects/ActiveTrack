import express from "express";
import {  UserLogin, UserRegister } from "../controllers/User";
import { verifyToken } from "../middleware/verifyToken.js";



const router = express.Router();


router.post("/signup", UserRegister);
router.post("/signin", UserLogin);
router.get("/dashboard", verifyToken, getUserDashboard);