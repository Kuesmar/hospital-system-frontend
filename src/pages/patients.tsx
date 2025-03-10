import { title } from "@/components/primitives";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@heroui/table";
import DefaultLayout from "@/layouts/default";
import { useGlobalAppContext } from "@/context/globalContext";

const columns = [
    {
        key: "id",
        label: "ID",
    },
    {
        key: "firstName",
        label: "First Name",
    },
    {
        key: "lastName",
        label: "Last Name",
    },
    {
        key: "email",
        label: "Email",
    },
    {
        key: "phone",
        label: "Phone",
    },
];

export default function DocsPage() {
    const { patientsList } = useGlobalAppContext();

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-6xl text-center justify-center">
                    <h1 className="text-5xl pb-8">Patients</h1>
                    <Table aria-label="Example table with dynamic content">
                        <TableHeader>
                            {columns.map((column) => (
                                <TableColumn key={column.key}>
                                    {column.label}
                                </TableColumn>
                            ))}
                        </TableHeader>
                        <TableBody emptyContent={"No rows to display."}>
                            {patientsList.map((patient) => (
                                <TableRow key={patient.id}>
                                    <TableCell>{patient.id}</TableCell>
                                    <TableCell>
                                        {patient.person?.firstName || "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {patient.person?.lastName || "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {patient.person?.email || "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {patient.person?.phone || "N/A"}
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
