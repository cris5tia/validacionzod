import { NextFunction, Request, Response } from "express";
import { ZodSchema, ZodIssue } from "zod";

export const validate = (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {

    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Error de validación",
        errors: result.error.issues.map((e: ZodIssue) => ({
          campo: e.path.join("."),
          error: e.message
        }))
      });
    }

    
    req.body = result.data;

    next();
  };
