import { Router } from 'express';
import { AppointmentInMemoryRepository } from './in-memory.repository';
import { AppointmentService } from '../application/appointment.service';
import { AppointmentController } from './appointment.controller';

const appointmentRepository = new AppointmentInMemoryRepository();
const appointmentService = new AppointmentService(appointmentRepository);
const appointmentController = new AppointmentController(appointmentService);

const appointmentRouter = Router();

appointmentRouter.post('/', (req, res) => appointmentController.createAppointment(req, res));

export { appointmentRouter };