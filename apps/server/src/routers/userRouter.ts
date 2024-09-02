import userController from "@controllers/userController";
import { Router } from "express";

const router: Router = Router();

router.post("/signup", userController.handleUserSignup);
router.post("/signin", userController.handleUserSignin);

export default router;
