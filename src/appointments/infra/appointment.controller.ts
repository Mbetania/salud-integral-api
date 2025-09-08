import { Request, Response } from 'express';
import { AppointmentService } from '../application/appointment.service';
import { AppointmentInDto } from './dto/appointment.dto';

export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  async createAppointment(req: Request, res: Response): Promise<Response> {
    const data: AppointmentInDto = req.body;

    if (!data.specialty || !data.professional || !data.day || !data.hour || !data.patientId) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    try {
      const newAppointment = await this.appointmentService.createAppointment({
        patientId: data.patientId,
        specialty: data.specialty,
        professionalId: data.professional,
        day: data.day,
        hour: data.hour,
      });

      return res.status(201).json({
        id: newAppointment.id,
        patientId: newAppointment.patientId,
        specialty: newAppointment.specialty,
        professionalId: newAppointment.professionalId,
        day: newAppointment.day,
        hour: newAppointment.hour,
        state: newAppointment.state,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor al crear el turno' });
    }
  }
}