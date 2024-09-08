import { Router } from "express"
import { createPetition, upvotePetition, getPetitionById, getAllPetitons } from "../controllers/petition.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import multer from "multer";

const upload = multer(); // for parsing multipart/form-data
const router = Router()


router.route("/create").post(upload.none(), verifyJWT, createPetition)
router.route("/archive").get(upload.none(), verifyJWT, getAllPetitons)
router.route("/:id/upvote").post(upload.none(), verifyJWT, upvotePetition)
router.route("/details/:id").get(upload.none(), verifyJWT, getPetitionById)

export default router