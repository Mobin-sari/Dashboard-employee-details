import List from "../components/List";

import { useEmployee } from "../context/EmployeeContext";

import Avatar from "@mui/material/Avatar";

import { stringAvatar } from "../helper/avatar";
import { Link } from "react-router-dom";

function EmployeeList() {
  const data = useEmployee();

  return (
    <>
      <List />
      <div>
        <ul>
          {data?.map((user) => (
            <li key={user.id}>
              <Link to={`/employee/${user.id}`}>
                <Avatar {...stringAvatar(`${user.name}`)} />
              </Link>
              <p>{`${user.name}`}</p>
              <span>{user.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default EmployeeList;
