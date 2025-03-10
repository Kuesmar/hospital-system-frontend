import { person } from './person';

export interface Doctors {
    id: string;
    personId: number;
    speciality: string;
    createdAt: string;
    updatedAt: string;
    createdBy: number;
    person: person;
};
