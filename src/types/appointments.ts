export interface Appointment {
    id: string,
    patientId: number,
    doctorId: number,
    patientName?: string,
    doctorName?: string,
    appointmentDate: string,
    appointmentTime: string,
    appointmentStatus: string,
    createdAt: string,
    updatedAt: string,
    createdBy: number
};
