import { collection, getDocs } from "firebase/firestore";
import { employeeDb } from "./fbConfig.js";
import { useEffect, useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { Title } from "@mantine/core";

const Hierarchy = () => {

  
  const [rolesData, setRolesData] = useState([]);
  const RolesCollection = collection(employeeDb, "Roles");

  useEffect(() => {
    const getRolesList = async () => {
      try {
        const data = await getDocs(RolesCollection);
        const filteredRoles = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log(filteredRoles);
        setRolesData(filteredRoles);
      } catch (err) {
        console.log(err);
      }
    };
    getRolesList();
  }, []);

  const generateHierarchy = (parentRole) => {
    const children = rolesData.filter((role) => role.ParentRole === parentRole);

    if (children === 0) {
      return null
    }

    return (
      <Tree 
        key={parentRole} 
        lineWidth={"6px"}
        lineColor={"green"}
        label={parentRole==="CEO"?"CEO":""}
        >
        {children.map((childRole) => (
          <TreeNode key={childRole.id} label={childRole.Role}>
                 {generateHierarchy(childRole.Role)} 
          </TreeNode>
        ))}
      </Tree>
    );
  };

  return (
    <div className="m-0 ">
      <Title order={1} className="flex justify-center">This is our organization's hierarchy</Title>
             <div className="bg-slate-400 align-center ml-8" >{generateHierarchy("CEO")}</div>
    </div>
  );
};


export default Hierarchy;
