import { Table, Button } from "@mantine/core";
import { dataref } from "./fbConfig";
import { useEffect, useState } from "react";
import data from "./data";

function ShowEmployee() {
const [datas, setDatas]=useState([])
  

useEffect(()=>{
  dataref.ref().child("employees").on('value', data=>{
   const getData = Object.values(data.val())
   setDatas(getData)
  })
},[])
console.log(datas)

  return (
    <div className="ml-4">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Employee Name</Table.Th>
            <Table.Th>Employee Role</Table.Th>
            <Table.Th>Employee Address</Table.Th>
            <Table.Th>Employee Salary</Table.Th>
            <Table.Th className="text-red-500 text-center">Delete</Table.Th>
            <Table.Th className="text-blue-700">Update</Table.Th>
          </Table.Tr>
        </Table.Thead>
       
        {datas.map((data)=>
          <Table.Tbody key={data.key}>
          <Table.Td>{data.name}</Table.Td>
          <Table.Td>{data.role}</Table.Td>
          <Table.Td>{data.address}</Table.Td>
          <Table.Td>{data.salary}</Table.Td>
          <Table.Td><Button  variant="gradient"
          gradient={{ from: 'pink', to: 'red', deg: 90 }}>Delete</Button></Table.Td>
          <Table.Td><Button  variant="gradient"
          gradient={{ from: 'blue', to: 'lime', deg: 90 }}>Update</Button></Table.Td>
          </Table.Tbody>
        )} 
        
      </Table>
    </div>
  );
}

export default ShowEmployee;
