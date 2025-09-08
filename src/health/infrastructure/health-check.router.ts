import { Router } from "express";
import { HealthController } from "./health-check.controller";

const healthRouter = Router();

healthRouter.get("/", HealthController.check);

export { healthRouter };
