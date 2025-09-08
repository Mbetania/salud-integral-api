import request from 'supertest';
import app from '../../src/app';

describe('Appointment API', () => {

  it('should create an appointment successfully and return status 201', async () => {
    const appointmentPayload = {
      specialty: 'Cardiología',
      professional: 'Juan Pérez',
      day: '2025-10-27',
      hour: '10:30',
      patientId: 'ID_DEL_PACIENTE_123',
    };

    const response = await request(app)
      .post('/api/appointment')
      .send(appointmentPayload)
      .set('Accept', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);

    expect(response.body).toHaveProperty('id');
    expect(response.body.patientId).toBe(appointmentPayload.patientId);
    expect(response.body.specialty).toBe(appointmentPayload.specialty);
    expect(response.body.professionalId).toBe(appointmentPayload.professional);
    expect(response.body.day).toBe(appointmentPayload.day);
    expect(response.body.hour).toBe(appointmentPayload.hour);

    expect(response.body.state).toBe('pending');
  });

  it('should return status 400 if required fields are missing', async () => {
    const invalidPayload = {
      professional: 'Juan Pérez',
      day: '2025-10-27',
      hour: '10:30',
      patientId: 'ID_DEL_PACIENTE_123',
    };

    const response = await request(app)
      .post('/api/appointment')
      .send(invalidPayload)
      .set('Accept', 'application/json');

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Faltan campos obligatorios');
  });
});
