import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Divider,
} from "@nextui-org/react";

const recentFiles = [
  {
    name: "Peng Meeting",
    type: "Audio",
    duration: "30:45",
    createdDate: "2023-10-31",
    lastUpdated: "2023-11-01",
  },
  {
    name: "Ekene Smart",
    type: "SML10025",
    duration: "30:45",
    createdDate: "2023-10-31",
    lastUpdated: "2023-11-01",
  },
  {
    name: "Tofunmi Idowu",
    type: "SML10025",
    duration: "30:45",
    createdDate: "2023-10-31",
    lastUpdated: "2023-11-01",
  },
  {
    name: "Naomi Igimoh",
    type: "SML10025",
    duration: "30:45",
    createdDate: "2023-10-31",
    lastUpdated: "2023-11-01",
  },
  {
    name: "Edy Hermans",
    type: "SML10025",
    duration: "30:45",
    createdDate: "2023-10-31",
    lastUpdated: "2023-11-01",
  },
  {
    name: "Timmy Adubi",
    type: "SML10025",
    duration: "30:45",
    createdDate: "2023-10-31",
    lastUpdated: "2023-11-01",
  },
  {
    name: "Alex Oyebade",
    type: "SML10025",
    duration: "30:45",
    createdDate: "2023-10-31",
    lastUpdated: "2023-11-01",
  },
];

export default function App() {
  return (
    <div className="border border-slate-200 rounded-xl">
      <h2 className="text-xl font-bold m-4">Recent Files</h2>
      <Divider />
      <Table
        color="primary"
        selectionMode="multiple"
        className="border border-none p-3"
        aria-label="Recent Files Table"
      >
        <TableHeader className="bg-blue-100">
          <TableColumn>Name</TableColumn>
          <TableColumn>Type</TableColumn>
          <TableColumn>Duration</TableColumn>
          <TableColumn>Date Created</TableColumn>
          <TableColumn>Last Updated</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {recentFiles.map((file, index) => (
            <TableRow key={index}>
              <TableCell>{file.name}</TableCell>
              <TableCell>{file.type}</TableCell>
              <TableCell>{file.duration}</TableCell>
              <TableCell>{file.createdDate}</TableCell>
              <TableCell>{file.lastUpdated}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
