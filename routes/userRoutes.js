import express from 'express'
import { authUser, getUserProfile, logOutUser, registerUser, updateUserProfile } from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleWare.js'

const router = express.Router()

router.post('/',registerUser)
router.post('/auth',authUser)
router.post('/logout',logOutUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)

export default router