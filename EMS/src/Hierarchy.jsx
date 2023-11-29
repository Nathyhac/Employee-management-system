import { collection, getDocs } from "firebase/firestore";
import { employeeDb } from "./fbConfig.js";
import { useEffect, useState } from "react";
import { Tree, TreeNode } from 'react-organizational-chart';

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
        console.log(filteredRoles);
        setRolesData(filteredRoles);
      } catch (err) {
        console.log(err);
      }
    };
    getRolesList();
  }, []);

  const renderTree = (node) => {
    if (!node) {
      return null;
    }

    return (
      <Tree key={node.id} lineWidth={'2px'} lineColor={'green'} lineBorderRadius={'10px'} label={node.Role}>
        {node.children && node.children.map(child => (
          <TreeNode key={child.id} label={child.Role}>
            {renderTree(child)}
          </TreeNode>
        ))}
      </Tree>
    );
  };

  return (
    <div>
      <div>This is our organization's hierarchy</div>
      {rolesData.length > 0 && rolesData.map((role) => renderTree(role))}
    </div>
  );
};

export default Hierarchy;
