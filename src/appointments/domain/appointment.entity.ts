export enum AppoimentState {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELED = 'canceled',
}

export interface AppoimentProps {
  id: string;
  patientId: string;
  professionalId: string;
  specialty: string;
  day: string;
  hour: string;
  state: AppoimentState;
}

export class Appointment {
  constructor(private props: AppoimentProps) {}

  get id(): string {
    return this.props.id;
  }
  get professionalId(): string {
    return this.props.professionalId;
  }
  get patientId(): string {
    return this.props.patientId;
  }
  get day(): string {
    return this.props.day;
  }
  get hour(): string {
    return this.props.hour;
  }
  get specialty(): string {
    return this.props.specialty;
  }
  get state(): AppoimentState {
    return this.props.state;
  }

  public cancelar(): void {
    this.props.state = AppoimentState.CANCELED;
  }
}