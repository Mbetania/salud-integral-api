import { Appointment } from "../domain/appointment.entity";
import { IAppointmentRepository } from "../domain/appointment.repository";

export class AppointmentInMemoryRepository implements IAppointmentRepository {
  private appointments = new Map<string, Appointment>();

  async create(appointment: Appointment): Promise<Appointment> {
    // console.log(`[Repo] Guardando nuevo appointment en memoria...`);
    this.appointments.set(appointment.id, appointment);
    return appointment;
  }

  async findById(id: string): Promise<Appointment | null> {
    const appointment = this.appointments.get(id);
    return appointment || null;
  }
}