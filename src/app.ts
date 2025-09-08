import express from "express";
import cors from "cors";
import helmet from "helmet";
import { healthRouter } from "./health/infrastructure/health-check.router";

const app = express();

// Middlewares globales
app.use(express.json());
app.use(cors());
app.use(helmet());

// Rutas
app.use("/api/health", healthRouter);

export default app;
