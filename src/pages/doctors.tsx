import DefaultLayout from "@/layouts/default";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@heroui/table";
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
    const { doctorsList } = useGlobalAppContext();

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-6xl text-center justify-center">
					<h1 className="text-5xl pb-8">Doctors</h1>
                    <Table aria-label="Example table with dynamic content">
                        <TableHeader>
                            {columns.map((column) => (
                                <TableColumn key={column.key}>
                                    {column.label}
                                </TableColumn>
                            ))}
                        </TableHeader>
                        <TableBody emptyContent={"No rows to display."}>
                            {doctorsList.map((doctor) => (
                                <TableRow key={doctor.id}>
                                    <TableCell>{doctor.id}</TableCell>
                                    <TableCell>
                                        {doctor.person?.firstName || "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {doctor.person?.lastName || "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {doctor.person?.email || "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {doctor.person?.phone || "N/A"}
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
