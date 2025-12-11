import { Router } from "express";
import {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} from "../controllers/students.controller";

import { validate } from "../middlewares/validate";
import {
  crearEstudianteSchema,
  actualizarEstudianteSchema
} from "../schemas/student.schema";

const router = Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentById);

router.post("/", validate(crearEstudianteSchema), createStudent);

router.put("/:id", validate(actualizarEstudianteSchema), updateStudent);


router.delete("/:id", deleteStudent);

export default router;

