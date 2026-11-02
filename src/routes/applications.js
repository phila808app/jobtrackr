import { Router } from "express";
import { updateApplication, getAllApplications,deleteApplication, findApplicationById,findByUserId,createApplication} from "../controllers/applicationsController.js";

const router = Router();


router.get('/',getAllApplications);
router.get('/:id',findApplicationById);
router.get('/users/:user_id',findByUserId);

router.post('/',createApplication);
router.delete('/:id',deleteApplication);
router.put('/',updateApplication);



export default router;