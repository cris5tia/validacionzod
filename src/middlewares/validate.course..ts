import { z } from "zod";

export const crearCursoSchema = z.object({
  code: z.string().min(1, "El código (codi) es obligatorio"),
  name: z.string().min(1, "El nombre es obligatorio"),

  capacity: z.coerce
    .number()
    .int("La capacidad debe ser un número entero")
    .min(1, "La capacidad es obligatoria")
});

export const actualizarCursoSchema = z.object({
  code: z.string().min(1, "El código (codi) es obligatorio"),
  name: z.string().min(1, "El nombre es obligatorio"),

  capacity: z.coerce
    .number()
    .int("La capacidad debe ser un número entero")
    .min(1, "La capacidad es obligatoria")
});