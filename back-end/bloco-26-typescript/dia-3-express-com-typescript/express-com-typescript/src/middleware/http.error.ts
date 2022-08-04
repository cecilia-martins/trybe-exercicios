import { NextFunction, Request, Response } from "express";
import HttpExeception from "../shared/http.exeception";


const httpErrorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => { // todos precisam ser tipados
  const { status, message } = err as HttpExeception;

  res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;



