import { Input, Title, Fieldset, Button, Alert } from "@mantine/core";
import { useState } from "react";
import { IconInfoCircle } from '@tabler/icons-react';
import { addDoc, collection,  } from "firebase/firestore";
import { employeeDb } from "./fbConfig";
import { useParams} from "react-router-dom";
import { useEffect } from "react";

function AddEmployee() {
const [name, setName]= useState("")
const [address, setAddress]= useState("")
const [salary, setSalary]= useState()
const [role, setRole]= useState("")

const [datas, setDatas]= useState([])





const employeesCollection = collection(employeeDb, "Employee")

const icon = <IconInfoCircle />;

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
  
      setName("");
      setRole("");
      setAddress("");
      setSalary("");
  
    setAlert(<Alert withCloseButton closeButtonLabel="Dismiss" variant="light" color="green" title={`${name} is succesfuly added`} icon={icon}>
      successfully Added
      </Alert>) 
    } catch (err) {
     setAlert(<Alert withCloseButton closeButtonLabel="Dismiss" variant="light" color="red" title="error" icon={icon}>
      there is an error when adding the Employee
      </Alert>) 
    }
  }else{
   setAlert(<Alert withCloseButton closeButtonLabel="Dismiss" variant="light" color="red" title="Empty field" icon={icon}>
   Name and role field cannot be empty
   </Alert>)
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
