import { z } from "zod";
/* post */
export const crearEstudianteSchema = z.object({
  firstName: z.string().min(1, "El nombre es obligatorio"),
  lastName: z.string().min(1, "El apellido es obligatorio"),
  email: z.string().email("El email es inválido")
});

/* put */
export const actualizarEstudianteSchema = z.object({
  firstName: z.string().min(1, "El nombre es obligatorio"),
  lastName: z.string().min(1, "El apellido es obligatorio"),
  email: z.string().email("El email es inválido")
});

