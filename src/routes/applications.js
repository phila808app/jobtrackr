import { Router } from "express";
import { updateApplication, getAllApplications,deleteApplication, findApplicationById,findByUserId,createApplication} from "../controllers/applicationsController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = Router();

router.use(authenticate);


router.get('/',getAllApplications);
router.get('/:id',findApplicationById);
router.get('/users/:user_id',findByUserId);

router.post('/',createApplication);
router.delete('/:id',deleteApplication);
router.put('/:id',updateApplication);



export default router;