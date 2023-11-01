import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";

const recentFiles = [
  { name: 'File 1', type: 'Audio', duration: '30:45', createdDate: '2023-10-31', lastUpdated: '2023-11-01' },
  { name: 'File 2', type: 'Video', duration: '1:15:20', createdDate: '2023-10-30', lastUpdated: '2023-10-31' },
];

export default function App() {
  return (
    <div className="flex flex-col gap-3">
      <Table selectionMode="single" defaultSelectedKeys={["2"]} aria-label="Example static collection table">
        <TableHeader>
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
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
