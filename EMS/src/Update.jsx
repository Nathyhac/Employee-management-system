import { Input, Title, Fieldset, Button, Alert } from "@mantine/core";
import { useState } from "react";
import { IconInfoCircle } from '@tabler/icons-react';
import { addDoc, collection, doc, getDoc, getDocs, updateDoc,  } from "firebase/firestore";
import { employeeDb } from "./fbConfig";
import { useParams} from "react-router-dom";
import { useEffect } from "react";


function UpdateEmployee() {
  const [name, setName]= useState("")
  const [address, setAddress]= useState("")
  const [salary, setSalary]= useState()
  const [role, setRole]= useState("")


const [datas, setDatas]= useState([])

const {id} = useParams();



const employeeRefCollection = collection(employeeDb, "Employee");

  useEffect(()=>{
    const getEmployeeList = async () => {
      try{
        const data  = await getDocs(employeeRefCollection)
        const filteredData = data.docs.map((doc)=>({
          ...doc.data(), 
          id: doc.id,
        }));
        console.log(filteredData)
        setDatas(filteredData)
      }catch(err){
     console.log(err)
      }
      
    }
    getEmployeeList();
  }, [id]); 

  useEffect(() => {
    if (id) {
      datas.map((data) => {
        if (data.id === id) {
          setName(data.Name);
          setRole(data.Role);
          setAddress(data.Address);
          setSalary(data.Salary);
        }
      });
    }
  }, [id, datas]);


const [alert, setAlert] = useState(null);
const onSubmitEmployee = async () => {
  const icon = IconInfoCircle
  if(name && role !== "" ){
    <Alert>Fill the name and the role</Alert>

      try {
        const employeeRef = doc(employeeRefCollection, id);

        await updateDoc(employeeRef, {
          Name: name,
          Role: role,
          Salary: salary,
          Address: address,
        });
    
        setName("");
        setRole("");
        setAddress("");
        setSalary("");
    
      setAlert(<Alert color="green">
        successfully Added
        </Alert>) 
      } catch (err) {
       setAlert(<Alert color="red">
        there is an error when adding the Employee
        </Alert>) 
      }
    }
    
   else{
   console.log("error")
  }
 
};
   
 
  return (
    <div className="flex justify-center p-9">
   
      <form onSubmit={(e) => { e.preventDefault(); onSubmitEmployee();}}>
        <Title order={1}>Updating the employee</Title>
        <Fieldset legend="employee information">
          <div>
            <label htmlFor="Name">Name</label>
            <Input
             value={name || ""}
             name="Name"
             onChange={(e)=>setName(e.target.value)}
             placeholder="Employees name"  />
          </div>
          <div>
            <label htmlFor="Role">Role</label>
            <Input
            value={role || ""}
            name="Role"
            onChange={(e)=>setRole(e.target.value)}
            placeholder="Employees role"   />
          </div>
          <div>
            <label htmlFor="Address">Address</label>
            <Input 
            value={address || ""}
            name="Address"
            onChange={(e)=>setAddress(e.target.value)}
            placeholder="Employees address" />
          </div>
          <div>
            <label htmlFor="Salary">Salary</label>
            <Input
            value={salary || ""}
            name="Salary"
            onChange={(e)=>setSalary(e.target.value)}
            placeholder="Employees salary"  />
          </div>
          <div className="flex justify-center p-1">
            <Button type="submit" >Update</Button>
          </div>
          <div>
          {alert}
          </div>
        </Fieldset>
      </form>
    
    </div>
  );
}

export default UpdateEmployee;
