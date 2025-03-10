import { person } from './person';

export interface Patients {
    id: string;
    personId: number;
    createdAt: string;
    updatedAt: string;
    createdBy: number;
    person: person;
};
