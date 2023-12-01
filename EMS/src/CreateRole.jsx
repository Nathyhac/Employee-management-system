import { Input, Title, Fieldset, Button, Alert } from "@mantine/core";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { employeeDb } from "./fbConfig";
import { IconInfoCircle } from '@tabler/icons-react';


function AddEmployee() {
  const icon = <IconInfoCircle />;

  
  const [roles, setRoles]= useState('')
  const [parentRole, setParentRole]= useState('')
  const [alert, setAlert]=useState('')

  const RolesCollection = collection(employeeDb, "Roles")


  const onSubmitRoles = async () => {
    if(roles && parentRole !== ""){
      if(roles==="CEO"){
        parentRole===null
      }
      try {
        await addDoc(RolesCollection, {
          
          Role:roles,
          ParentRole:parentRole
        });
        setRoles("");
        setParentRole("")
    
      setAlert(<Alert withCloseButton closeButtonLabel="Dismiss" variant="light" color="green" title="Role added" icon={icon}>
        successfully Added
        </Alert>) 
      } catch (err) {
       setAlert(<Alert>
        there is an error when adding the Employee
        </Alert>) 
      }
    }else{
     setAlert(<Alert  withCloseButton closeButtonLabel="Dismiss" variant="light" color="red" title="empty field" icon={icon}>Name and role field cannot be empty</Alert>)
    }
   
  };



  return (
    <div className="flex justify-center p-9">
      <form onSubmit={(e) => { e.preventDefault(); onSubmitRoles();}}>
        <Title order={1}>Add new employee to our company</Title>
        <Fieldset legend="employee information">
          <div>
            <label htmlFor="name">Role Name</label>
            <Input name="name" placeholder="Role Name" 
            value={roles}
            onChange={(e)=>setRoles(e.target.value.toUpperCase())
            }/>
          </div>
          <div>
            <label htmlFor="role">Parent Role</label>
            <Input name="role" placeholder="Parent Role" 
            value={parentRole}
            onChange={(e)=>setParentRole(e.target.value.toUpperCase())}

            />
          </div>
          <div className="flex justify-center p-1">
            <Button type="submit">Submit</Button>
          </div>
        </Fieldset>
        <div>
        {alert}
        </div>
      </form>
     
    </div>
  );
}

export default AddEmployee;
