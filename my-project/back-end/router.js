import { Router } from "express";
import * as request from './requestHandler.js'
import Auth from "./middleware/auth.js";
const router=Router()


router.route('/user').post(request.userRegister)
router.route('/login').post(request.Login)
router.route('/home').get(Auth,request.Home)
router.route('/fpwd').post(request.forget)
router.route('/logout').get(request.Logout)
router.route('/resetpassword').post(request.resetPassword)
router.route('/usercount').get(request.userCount)



router.route('/addstudents').post(request.addStudents)
router.route('/getstudent').get(request.getStudents)
router.route('/getstudentedit/:id').get(request.getStudentEdit)
router.route('/deletestudent/:id').delete(request.deleteStudent)
router.route('/updatestudent/:id').patch(request.updateStudent)
router.route('/studentscount').get(request.studentsCount)


router.route('/addstaff').post(request.addStaff)
router.route('/getstaffedit/:id').get(request.getStaffEdit)
router.route('/getstaff').get(request.getStaff)
router.route('/deletestaff/:id').delete(request.deleteStaff)
router.route('/updatestaff/:id').patch(request.updateStaff)
router.route('/staffcount').get(request.staffCount)


router.route('/addmarks').post(request.addMarks)
router.route('/getmark/:id').get(request.getMarkEdit)
router.route('/getmark/:id').get(request.getMarkEdit)






// router.route('/getstudentid/:studentid').get(request.getStudentbyid)


export default router;