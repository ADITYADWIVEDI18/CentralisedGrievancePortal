import { Router } from "express"
import { loginUser, logoutUser, registerUser, refreshAccessToken } from "../controllers/user.controller.js";
import { createPetition, upvotePetition, getPetitionById } from "../controllers/petition.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import multer from "multer";

const upload = multer(); // for parsing multipart/form-data
const router = Router()

router.route("/register").post(upload.none(), registerUser) //Register will be the suffix

router.route("/login").post(upload.none(), loginUser)

//Secured Routes
router.route("/logout").post(upload.none(), verifyJWT, logoutUser)

router.route("/refresh-token").post(upload.none(), refreshAccessToken)

//Petition





export default router;