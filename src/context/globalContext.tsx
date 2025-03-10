import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Appointment } from "@/types/appointments";
import { Doctors } from "@/types/doctors";
import { Patients } from "@/types/patients";
import { appointments as getAppointments } from "@/API/appointments";
import { doctors as getDoctors } from "@/API/doctors";
import { patients as getPatients } from "@/API/patients";

type GlobalContextType = {
  appointmentsList: Appointment[];
  doctorsList: Doctors[];
  patientsList: Patients[];
};

const AppContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalAppProvider = ({ children }: { children: ReactNode }) => {
    const [appointmentsList, setAppointmentsList] = useState([]);
    const [doctorsList, setDoctorsList] = useState([]);
    const [patientsList, setPatientsList] = useState([]);

    useEffect(() => {
        getAppointments().then(setAppointmentsList);
        getDoctors().then(setDoctorsList);
        getPatients().then(setPatientsList);
    }, []);

    return (
        <AppContext.Provider value={{ appointmentsList, doctorsList, patientsList }}>
            {children}
        </AppContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useGlobalAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
};
