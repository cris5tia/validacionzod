import { Router } from "express";
import {
    getAllEnrollements,
    getEnrollementById,
    getEnrollementsByStudentId,
    getEnrollementsByCourseId,
    createEnrollement,
    updateEnrollement,
    deleteEnrollement,
} from "../controllers/enrollements.controller";
import { validate } from "../middlewares/validate";
import {
  enrollementSchema,
  enrollementUpdateSchema
} from "../middlewares/validate.enrollement";

const router = Router();

router.get("/", getAllEnrollements);
router.get("/:id", getEnrollementById);


router.post("/", validate(enrollementSchema), createEnrollement);


router.put("/:id", validate(enrollementUpdateSchema), updateEnrollement);

router.delete("/:id", deleteEnrollement);

export default router;