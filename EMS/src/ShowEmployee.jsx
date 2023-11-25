import { Table, Button, Alert } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";  
import { employeeDb } from "./fbConfig";
import { getDocs, getDoc, collection, deleteDoc, doc } from "firebase/firestore";

function ShowEmployee() { 
  const [datas, setDatas] = useState([]);
  

  const employeesCollection = collection(employeeDb, "Employee")

  useEffect(()=>{
    const getEmployeeList = async () => {
      try{
        const data  = await getDocs(employeesCollection)
        const filteredData = data.docs.map((doc)=>({
          ...doc.data(), 
          id: doc.id,
        }));
        setDatas(filteredData)
      }  
      catch(err){
     console.log(err)
      }
    }
    getEmployeeList();
  }, [employeesCollection]);  



  const deleteEmployee = async(id) => { 
     const EmployeeDoc = doc(employeeDb,"Employee", id);
     await deleteDoc(EmployeeDoc)
  };
  return (
    <div className="ml-4">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Employee Id</Table.Th>
            <Table.Th>Employee Name</Table.Th>
            <Table.Th>Employee Role</Table.Th>
            <Table.Th>Employee Address</Table.Th>
            <Table.Th>Employee Salary</Table.Th>
            <Table.Th className="text-red-500 text-center">Update</Table.Th>
            <Table.Th className="text-blue-700">Delete</Table.Th>
          </Table.Tr>
        </Table.Thead>
      

        {datas.map((employee,index) =>
          { 
            return (
              <Table.Tbody key={employee.id}>
              <Table.Tr  key={employee.id} >
              <Table.Td scope="row">{index + 1}</Table.Td>
               <Table.Td>{employee.Name}</Table.Td>
               <Table.Td>{employee.Role}</Table.Td>
               <Table.Td>{employee.Address}</Table.Td>
               <Table.Td>{employee.Salary}</Table.Td>
   
               <Link to="update/:id">
               <Table.Td >
               <Button
                 variant="gradient"
                 gradient={{ from: "blue", to: "indigo", deg: 90 }}
               >
                 Update
               </Button>
             </Table.Td>
               </Link>
               
               <Table.Td>
                 <Button
                   variant="gradient"
                   gradient={{ from: "pink", to: "red", deg: 90 }}
                   onClick={() => deleteEmployee(employee.id)}              >
                   Delete
                 </Button>
               </Table.Td>
             </Table.Tr>
              </Table.Tbody>
              
            )
          })
          }
          </Table>
    </div>
  );
}

export default ShowEmployee;
