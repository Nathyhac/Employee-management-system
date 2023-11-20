import { Input, Title, Fieldset, Button, Alert } from "@mantine/core";
import { useState } from "react";
import { dataref } from "./fbConfig";
import { IconInfoCircle } from '@tabler/icons-react';

function AddEmployee() {
const [name, setName]= useState({
  name:"",
  role:"",
  address:"",
  salary:""
})
const [alert, setAlert] = useState(null);

const handleSubmit = () => {
  const icon = <IconInfoCircle />;
  if (name.name!=="") {
     dataref.ref().child("employees").push(name);
    setName({
     name:"",
     role:"",
     address:"",
     salary:""
    })
    setAlert(
      <Alert variant="light" color="blue" title="Employee added successfully" icon={icon}>
        Employee added successfully!
      </Alert>
    );
  }
else{
  setAlert(
    <Alert variant="light" color="red" title="unable to add employee" icon={icon}>
    "The addition of an employee requires the specification of their name. Kindly provide the employee's name to proceed."
    </Alert>
  );
}}


  
  const handleChange=(e)=>{
    setName(prevName=>{
      return{
        ...prevName, [e.target.name]:e.target.value
      }
    }

    );
  }

  return (
    <div className="flex justify-center p-9">
   
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <Title order={1}>Add new employee to our company</Title>
        <Fieldset legend="employee information">
          <div>
            <label htmlFor="name">Name</label>
            <Input
             value={name.name}
             name="name"
             onChange={handleChange}
             placeholder="Employees name"  />
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <Input
            value={name.role}
            name="role"
            onChange={handleChange}
            placeholder="Employees role"   />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Input 
            value={name.address}
            name="address"
            onChange={handleChange} 
            placeholder="Employees address" />
          </div>
          <div>
            <label htmlFor="salary">Salary</label>
            <Input
            value={name.salary}
            name="salary"
            onChange={handleChange}
            placeholder="Employees salary"  />
          </div>
          <div className="flex justify-center p-1">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
          <div>
          {alert}</div>
        </Fieldset>
      </form>
    </div>
  );
}

export default AddEmployee;
