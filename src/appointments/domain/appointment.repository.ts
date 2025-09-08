import { Appointment } from "./appointment.entity";

export interface IAppointmentRepository {
  create(turno: Appointment): Promise<Appointment>;
  findById(id: string): Promise<Appointment | null>;
}