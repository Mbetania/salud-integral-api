import { Request, Response } from "express";
import { CheckHealth } from "../application/healt-check.use-case";

export class HealthController {
  static check(req: Request, res: Response): void {
    const service = new CheckHealth();
    const result = service.execute();
    res.status(200).json(result);
  }
}
