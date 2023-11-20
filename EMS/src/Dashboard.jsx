import { Title } from "@mantine/core";
import "./index.css";
import "@mantine/core/styles.css";
import { IoIosPeople } from "react-icons/io";
import { FaCriticalRole } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { BsPersonAdd } from "react-icons/bs";
import { TbHierarchy3 } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const [icon, setIcon]= useState(true);
  const [visible, setVisible]= useState(true)
  const [isRotated, setIsRotated]=useState(false)
  
  return (
    <div className="flex">
      <div className={`${icon?"w-72":"w-20"} duration-300 flex justify-center  pt-5 h-screen bg-black text-white relative iconsBar`}>

       <img src="./../public/control.png" alt="control" 
       className={`absolute cursor-pointer -right-[15px] top-10 rounded-full border-6 border-black transition-transform transform  ${isRotated?"rotate-180":""}`}
       onClick={()=>{
          setIcon(!icon)
           setVisible(!visible)
           setIsRotated(!isRotated)
           
          } }
        />   

         <div>
               { visible && (<Title id="title" order={1} className="pb-[50px]">
                 perago systems
                 </Title>)}
        

          <Link to="/">
            <div className="flex gap-x-4 items-center p-3 hover:bg-blue-300">
              <CiHome size="2rem" className={`${!visible && "ml-3"}`} />
             {visible && <Title order={4} className="origin-left">
             Home
           </Title>}
            </div>
          </Link>

          <Link to="addemployee">
            <div className="flex gap-x-4 items-center p-3 hover:bg-blue-300">
              <BsPersonAdd size="2rem" className={`${!visible && "ml-3"}`} />
             {visible &&<Title order={4} className="origin-left">
             Add employee
           </Title>} 
            </div>
          </Link>

          <Link to="createrole">
            <div className="flex gap-x-4 items-center p-3 hover:bg-blue-300">
              <FaCriticalRole size="2rem" className={`${!visible && "ml-3"}`} />
              {visible &&<Title order={4} className="origin-left">
              Create Role
            </Title>}
            </div>
          </Link>

          <Link to="showemployee">
            <div className="flex gap-x-4 items-center p-3 hover:bg-blue-300">
              <IoIosPeople size="2rem" className={`${!visible && "ml-3"}`} />
              {visible &&<Title order={4} className="origin-left">
              Show Employee List
            </Title>}
            </div>
          </Link>

          <Link to="hierarchy">
          <div className="flex gap-x-4 items-center p-3 hover:bg-blue-300">
            <TbHierarchy3 size="2rem" className={`${!visible && "ml-3"}`}/>
            {visible &&<Title order={4} className="origin-left">
            Show Roles Hierarchy
          </Title>}
          </div>

          </Link>
          
        </div>
      </div>
      <div className=" flex justify-center"></div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
