import { Router } from "express";
import { getAllApplications } from "../controllers/applicationsController.js";

const router = Router();


router.get('/',getAllApplications);


export default router;