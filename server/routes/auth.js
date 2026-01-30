import { Router } from 'express';
import {getUser, login, register} from "../controllers/auth.js";
import {checkAuth} from "../middlewares/checkAuth.js";

const router = Router();

//register
//  api/auth/register
router.post('/register', register);

// login
// api/auth/login
router.post('/login', login);

// get User
// api/auth/user
router.get('/user', checkAuth, getUser);

export default router;