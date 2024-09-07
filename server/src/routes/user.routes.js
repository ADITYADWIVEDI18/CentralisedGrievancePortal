import { Router } from "express"
import {
    loginUser,
    logoutUser,
    registerUser,
    refreshAccessToken,
    submitGrievance,
    getGrievanceCounts,
    respondToGrievance,
    getAllGrievances,
    getUserGrievances,
    getPendingGrievances
} from "../controllers/user.controller.js";
import { verifyJWT, verifyAdmin } from "../middlewares/auth.middleware.js";
import multer from "multer";

const upload = multer(); // for parsing multipart/form-data
const router = Router()

router.route("/register").post(upload.none(), registerUser) //Register will be the suffix

router.route("/login").post(upload.none(), loginUser)

//Secured Routes
router.route("/logout").post(upload.none(), verifyJWT, logoutUser)

router.route("/refresh-token").post(upload.none(), refreshAccessToken)

router.route("/submit-grievance").post(upload.none(), verifyJWT, submitGrievance)

router.route("/each-user-grievance").get(upload.none(), verifyJWT, getUserGrievances)


//ADMIN
router.route("/grievance-count").get(upload.none(), verifyAdmin, getGrievanceCounts)
router.route("/respond-grievance/:id").put(upload.none(), verifyAdmin, respondToGrievance)
router.route("/all-grievances").get(upload.none(), verifyAdmin, getAllGrievances)
router.route("/pending-grievances").get(upload.none(), verifyAdmin, getPendingGrievances)




export default router;