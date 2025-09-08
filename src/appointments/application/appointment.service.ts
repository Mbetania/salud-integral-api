import { v4 as uuidv4 } from 'uuid';
import { AppoimentProps, AppoimentState, Appointment } from '../domain/appointment.entity';
import { IAppointmentRepository } from '../domain/appointment.repository';

export class AppointmentService {
  constructor(private readonly appointmentRepository: IAppointmentRepository) {}

  async createAppointment(data: Omit<AppoimentProps, 'id' | 'state'>): Promise<Appointment> {
    // console.log(`[AppointmentService] Validando datos para nuevo turno`);

    const newAppointment = new Appointment({
      id: uuidv4(),
      ...data,
      state: AppoimentState.PENDING,
    });

    const appointmentCreated = await this.appointmentRepository.create(newAppointment);
    console.log(`[AppointmentService] Turno creado exitosamente con ID: ${appointmentCreated.id}`);

    return appointmentCreated;
  }
}