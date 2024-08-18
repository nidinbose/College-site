import { Router } from "express";
import * as request from './requestHandler.js'
import Auth from "./middleware/auth.js";
const router=Router()


router.route('/user').post(request.userRegister)
router.route('/login').post(request.userLogin)

router.route('/home').post(Auth,request.Home)
router.route('/fpwd').post(request.Forget)
router.route('/addstudents').post(request.addStudents)
router.route('/getstudent').get(request.getStudents)
router.route('/addstaff').post(request.addStaff)
router.route('/getstaff').get(request.getStaff)
router.route('/logout').get(request.Logout)
router.route('/home').get(request.Home)


export default router;