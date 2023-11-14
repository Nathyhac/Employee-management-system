import { Title } from "@mantine/core";
import "./index.css";
import "@mantine/core/styles.css";
import { IoIosPeople } from "react-icons/io";
import { FaCriticalRole } from "react-icons/fa";
import { BsPersonAdd } from "react-icons/bs";
import { TbHierarchy3 } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex">
      <div className="flex justify-center w-72 pt-5 h-screen bg-black text-white">
        <div>
          <Title order={1} className="pb-[50px]">
            perago systems
          </Title>

          <Link to="/">
            <div className="flex gap-x-4 items-center p-3 hover:bg-blue-300">
              <BsPersonAdd size="2rem" />
              <Title order={4} className="origin-left">
                Hom
              </Title>
            </div>
          </Link>

          <Link to="addemployee">
            <div className="flex gap-x-4 items-center p-3 hover:bg-blue-300">
              <BsPersonAdd size="2rem" />
              <Title order={4} className="origin-left">
                Add employee
              </Title>
            </div>
          </Link>

          <Link to="createrole">
            <div className="flex gap-x-4 items-center p-3 hover:bg-blue-300">
              <FaCriticalRole size="2rem" />
              <Title order={4} className="origin-left">
                Create Role
              </Title>
            </div>
          </Link>

          <Link to="showemployee">
            <div className="flex gap-x-4 items-center p-3 hover:bg-blue-300">
              <IoIosPeople size="2rem" />
              <Title order={4} className="origin-left">
                Show Employee List
              </Title>
            </div>
          </Link>

          <Link to="hierarchy">
          <div className="flex gap-x-4 items-center p-3 hover:bg-blue-300">
            <TbHierarchy3 size="2rem" />
            <Title order={4} className="origin-left">
              Show Roles Hierarchy
            </Title>
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
