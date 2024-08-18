import signupUser from "@controllers/userController";
import { Router } from "express";

const router: Router = Router();

router.post("/signup", signupUser);

export default router;
