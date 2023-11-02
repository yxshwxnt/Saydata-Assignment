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
  { name: 'File 1', type: 'Audio', duration: '30:45', createdDate: '2023-10-31', lastUpdated: '2023-11-01' },
  { name: 'File 2', type: 'Video', duration: '1:15:20', createdDate: '2023-10-30', lastUpdated: '2023-10-31' },
];

export default function App() {
  return (
    <div className="">
      <h2 className="text-xl font-bold mb-2">Recent Files</h2>
      <Divider />
      <Table color="primary" selectionMode="multiple" defaultSelectedKeys={["2"]} aria-label="Example static collection table" className="border-none">
        <TableHeader className="bg-blue-100">
          <TableColumn>NAME</TableColumn>
          <TableColumn>TYPE</TableColumn>
          <TableColumn>DURATION</TableColumn>
          <TableColumn>DATE CREATED</TableColumn>
          <TableColumn>LAST UPDATED</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {recentFiles.map((file, index) => (
            <TableRow key={index}>
              <TableCell>{file.name}</TableCell>
              <TableCell>{file.type}</TableCell>
              <TableCell>{file.duration}</TableCell>
              <TableCell>{file.createdDate}</TableCell>
              <TableCell>{file.lastUpdated}</TableCell>
              <TableCell>
                {/* Add action buttons here */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
