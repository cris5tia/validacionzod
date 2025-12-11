import { validate } from "../middlewares/validate";
import {
  crearCursoSchema,
  actualizarCursoSchema,
} from "../middlewares/validate.course.";

import { Router } from "express";
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courses.controller";

const router = Router();

router.get("/", getAllCourses);

router.get("/:id", getCourseById);

router.post("/", validate(crearCursoSchema), createCourse);


router.put("/:id", validate(actualizarCursoSchema), updateCourse);


router.delete("/:id", deleteCourse);

export default router;
