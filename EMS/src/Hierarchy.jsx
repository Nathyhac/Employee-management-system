
import { collection, getDocs } from 'firebase/firestore';
import { employeeDb } from './fbConfig.js';
import { useEffect, useState } from 'react';



const Hierarchy = () => {
  const [rolesData, setRolesData]= useState([])
  const RolesCollection = collection(employeeDb,"Roles");

useEffect(()=>{
  const getRolesList= async () => {
try{
  const data = await getDocs(RolesCollection)
  const filteredData = data.docs.map((doc)=>({
    ...doc.data(), 
    id: doc.id,
  }));
  setRolesData(filteredData)
}catch(err){
  console.log(err)
}
  }
  getRolesList();
})
  return (
    <div className="bg-blue-900">
       {rolesData.map((role)=>{
       
        <h1>{role.Role}</h1>
       
       })}
    </div>
  );
};

export default Hierarchy;
