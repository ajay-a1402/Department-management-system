// API
const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController');
const DistributionController = require('../controllers/DistributionController');
const AdminController = require('../controllers/adminController');
const FilterController = require('../controllers/FilterController');
const passport = require('passport')
const path = require('path')
const jwtAuth = require('../middleware/passport')
const {adminAuth} = require('../middleware/passport')

const authUser = jwtAuth(passport).authenticate("jwt", { session: false });

const needsAdminAuth = adminAuth(passport).authenticate('admin_auth', {
    session: false,
    failWithError: true,
})
//user and admin API's
router.post('/admin', AdminController.CreateAdmin)
router.post('/createUSer',needsAdminAuth, AdminController.createUserList)


router.post('/user', UserController.userRegister)
router.post('/setPassword',authUser, UserController.setPassword)
router.post('/login', UserController.login)
router.get('/getUser', authUser,UserController.getUserDetails)

router.post('/Distribution/create', authUser,DistributionController.CreateDistribution)
router.put('/Distribution/update/:id', authUser,DistributionController.update)
router.get('/Distribution/getAll', authUser,DistributionController.GetAllDistribution)
router.post('/Distribution/getByDepartment', authUser,DistributionController.GetByDepartment)
router.put('/Distribution/delete/:id', authUser,DistributionController.DeleteDistribution)

router.post('/Filter/create', needsAdminAuth,FilterController.CreateFilter)
router.put('/Filter/update/:id', needsAdminAuth,FilterController.update)
router.get('/Filter/getAll', needsAdminAuth,FilterController.GetAllFilter)
router.post('/Filter/getByDepartment', authUser,FilterController.GetByDepartment)
router.put('/Filter/delete/:id', needsAdminAuth,FilterController.DeleteFilter)

module.exports = router
