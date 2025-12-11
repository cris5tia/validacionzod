import { z } from "zod";

export const enrollementSchema = z.object({
  studentId: z.number().min(1, "El id del estudiante es obligatorio y debe ser mayor que 0"),
  courseId: z.number().min(1, "El id del curso es obligatorio y debe ser mayor que 0"),
});

export const enrollementUpdateSchema = z.object({
  studentId: z.number().min(1).optional(),
  courseId: z.number().min(1).optional(),
});

