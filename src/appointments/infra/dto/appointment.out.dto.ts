import { AppoimentState } from "../../domain/appointment.entity";

export interface AppointmentOutDto {
  id: string;
  patientId: string;
  professionalId: string;
  specialty: string;
  day: string;
  hour: string;
  state: AppoimentState;
}