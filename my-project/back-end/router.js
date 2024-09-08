import { Router } from "express";
import * as request from './requestHandler.js'
import Auth from "./middleware/auth.js";
const router=Router()


router.route('/user').post(request.userRegister)
router.route('/login').post(request.userLogin)

// router.route('/home').post(Auth,request.Home)
router.route('/fpwd').post(request.forget)
router.route('/addstudents').post(request.addStudents)
router.route('/getstudent').get(request.getStudents)
router.route('/addstaff').post(request.addStaff)
router.route('/addmarks').post(request.addMarks)
router.route('/getstaff').get(request.getStaff)
router.route('/logout').get(request.Logout)
router.route('/home').post(Auth,request.Home)
router.route('/getstudentedit/:id').get(request.getStudentEdit)
router.route('/getmark/:id').get(request.getMarkEdit)
router.route('/deletestudent/:id').delete(request.deleteStudent)
router.route('/updatestudent/:id').patch(request.updateStudent)
router.route('/getstaffedit/:id').get(request.getStaffEdit)
router.route('/deletestaff/:id').delete(request.deleteStaff)
router.route('/updatestaff/:id').patch(request.updateStaff)
// router.route('/getstudentid/:studentid').get(request.getStudentbyid)


export default router;