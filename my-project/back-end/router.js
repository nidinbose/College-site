import { Router } from "express";
import * as request from './requestHandler.js'
import Auth from "./middleware/auth.js";
const router=Router()


router.route('/user').post(request.userRegister)
router.route('/login').post(request.userLogin)

router.route('/home').post(Auth,request.Home)
router.route('/fpwd').post(request.Forget)


export default router;