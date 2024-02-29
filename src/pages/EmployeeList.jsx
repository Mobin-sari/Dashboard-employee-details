import List from "../components/List";

import { motion } from "framer-motion";

import { useEmployee } from "../context/EmployeeContext";

import Avatar from "@mui/material/Avatar";

import { stringAvatar } from "../helper/avatar";
import { container, itemFramer } from "../helper/framerMotion";

import { Link } from "react-router-dom";

import styles from "../styles/employeeList.module.css";

function EmployeeList() {
  const data = useEmployee();

  return (
    <>
      <List />
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Full name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <motion.tbody
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {data.map((item) => (
              <motion.tr key={item.id} className="item" variants={itemFramer}>
                <motion.td
                  animate={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Link
                    to={`/employee/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Avatar {...stringAvatar(`${item.name}`)} />
                  </Link>
                </motion.td>
                <td>{`${item.name}`}</td>
                <td>{item.phone}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </>
  );
}

export default EmployeeList;
