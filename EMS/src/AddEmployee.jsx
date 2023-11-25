import { Input, Title, Fieldset, Button, Alert } from "@mantine/core";
import { useState } from "react";
import { IconInfoCircle } from '@tabler/icons-react';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { employeeDb } from "./fbConfig";
import { useParams} from "react-router-dom";
import { useEffect } from "react";

function AddEmployee() {
const [name, setName]= useState("")
const [address, setAddress]= useState("")
const [salary, setSalary]= useState()
const [role, setRole]= useState("")

const [datas, setDatas]= useState([])


const {id} = useParams();



const employeesCollection = collection(employeeDb, "Employee")


const [alert, setAlert] = useState(null);
const onSubmitEmployee = async () => {
  if(name && role !== "" ){
    try {
      await addDoc(employeesCollection, {
        Name: name,
        Role: role,
        Salary: salary,
        Address: address,
      });
  
      // Reset form values or perform any other actions after successful submission
      setName("");
      setRole("");
      setAddress("");
      setSalary("");
  
      // Display a success message or redirect to another page
    setAlert(<Alert>
      successfully Added
      </Alert>) 
    } catch (err) {
     setAlert(<Alert>
      there is an error when adding the Employee
      </Alert>) 
    }
  }else{
   setAlert(<Alert>Name and role field cannot be empty</Alert>)
  }
 
};
   
 
  return (
    <div className="flex justify-center p-9">
   
      <form onSubmit={(e) => { e.preventDefault(); onSubmitEmployee();}}>
        <Title order={1}>Add new employee to our company</Title>
        <Fieldset legend="employee information">
          <div>
            <label htmlFor="Name">Name</label>
            <Input
             value={name}
             name="Name"
             onChange={(e)=>setName(e.target.value)}
             placeholder="Employees name"  />
          </div>
          <div>
            <label htmlFor="Role">Role</label>
            <Input
            value={role}
            name="Role"
            onChange={(e)=>setRole(e.target.value)}
            placeholder="Employees role"   />
          </div>
          <div>
            <label htmlFor="Address">Address</label>
            <Input 
            value={address}
            name="Address"
            onChange={(e)=>setAddress(e.target.value)}
            placeholder="Employees address" />
          </div>
          <div>
            <label htmlFor="Salary">Salary</label>
            <Input
            value={salary}
            name="Salary"
            onChange={(e)=>setSalary(e.target.value)}
            placeholder="Employees salary"  />
          </div>
          <div className="flex justify-center p-1">
            <Button type="submit" >Submit</Button>
          </div>
          <div>
          {alert}
          </div>
        </Fieldset>
      </form>
    
    </div>
  );
}

export default AddEmployee;
