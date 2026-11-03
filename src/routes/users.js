import {Router} from 'express';
import {getAllUsers,getUserById,updateUser,deleteUser, register, login} from '../controllers/usersController.js';
import { authenticate } from "../middleware/authMiddleware.js";


const router = Router();

router.post('/register',register);
router.post('/login', login);

router.use(authenticate);
router.get('/',getAllUsers);
router.get('/:id',getUserById);


router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);


export default router;