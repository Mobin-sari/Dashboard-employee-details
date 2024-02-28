import List from "../components/List";

import { useEmployee } from "../context/EmployeeContext";

import Avatar from "@mui/material/Avatar";

import { stringAvatar } from "../helper/avatar";

function EmployeeList() {
  const dataEmployee = useEmployee();
  
  return (
    <>
      <List />
      <div>
        <ul>
          {dataEmployee.map((user) => (
            <li key={user.id}>
              <Avatar {...stringAvatar(`${user.name}`)} />
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
