import { Request, Response, NextFunction } from "express";

export function ensureAuthentication(request: Request, response: Response, next: NextFunction) {
  const authentication = true;

  if (authentication) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}