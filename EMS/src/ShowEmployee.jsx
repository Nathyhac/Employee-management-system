import { Table } from "@mantine/core";

function ShowEmployee() {

  return (
    <div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Employee Name</Table.Th>
            <Table.Th>Employee Id</Table.Th>
            <Table.Th>Employee Role</Table.Th>
            <Table.Th>Employee Address</Table.Th>
            <Table.Th>Employee Salary</Table.Th>
            <Table.Th className="text-red-500 text-center">Delete</Table.Th>
            <Table.Th className="text-blue-700">Update</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default ShowEmployee;
