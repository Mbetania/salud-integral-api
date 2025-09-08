import express from "express";
import cors from "cors";
import helmet from "helmet";
import { healthRouter } from "./health/infrastructure/health-check.router";
import { appointmentRouter } from './appointments/infra/appointment.router' 
const app = express();

// Middlewares globales
app.use(express.json());
app.use(cors());
app.use(helmet());

// Rutas
app.use("/api/health", healthRouter);
app.use('/api/appointment', appointmentRouter);

export default app;
