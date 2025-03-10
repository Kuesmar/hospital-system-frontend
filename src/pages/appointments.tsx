import DefaultLayout from "@/layouts/default";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@heroui/table";
import { Chip, ChipProps } from "@heroui/chip";
import { useGlobalAppContext } from "@/context/globalContext";

const columns = [
    {
        key: "id",
        label: "ID",
    },
    {
        key: "patientName",
        label: "Patient Name",
    },
    {
        key: "doctorName",
        label: "Doctor Name",
    },
    {
        key: "appointmentDate",
        label: "Appointment Date",
    },
    {
        key: "appointmentTime",
        label: "Appointment Time",
    },
    {
        key: "appointmentStatus",
        label: "Appointment Status",
    },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
    Confirmed: "success",
    Cancelled: "danger",
    Pending: "warning",
};

export default function DocsPage() {
    const { appointmentsList } = useGlobalAppContext();

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-6xl text-center justify-center">
                    <h1 className="text-5xl pb-8">Appointments</h1>
                    <Table aria-label="Example table with dynamic content">
                        <TableHeader>
                            {columns.map((column) => (
                                <TableColumn key={column.key}>
                                    {column.label}
                                </TableColumn>
                            ))}
                        </TableHeader>
                        <TableBody emptyContent={"No rows to display."}>
                            {appointmentsList.map((appointment) => (
                                <TableRow key={appointment.id}>
                                    <TableCell>{appointment.id}</TableCell>
                                    <TableCell>
                                        {appointment.patientName || "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {appointment.doctorName || "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {appointment.appointmentDate || "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {appointment.appointmentTime || "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            className="capitalize"
                                            color={
                                                statusColorMap[
                                                    appointment.appointmentStatus
                                                ]
                                            }
                                            size="sm"
                                            variant="flat"
                                        >
                                            {appointment.appointmentStatus ||
                                                "N/A"}
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </DefaultLayout>
    );
}
