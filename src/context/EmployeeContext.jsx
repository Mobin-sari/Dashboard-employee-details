import { createContext, useContext, useEffect, useState } from "react";


import axios from "axios";
import { BASE_DATA } from "../config/data";

export const dataEmployeeContext = createContext();

function EmployeeContext({ children }) {
  const [dataEmployee, setDataEmployee] = useState([]);

  useEffect(() => {
    const fetchBaseData = async () => {
      const responseData = await axios.get(`${BASE_DATA}`).then((res) => {
        return res;
      });
      setDataEmployee(responseData.data);
    };
    fetchBaseData();
  }, []);
  return (
    <>
      <dataEmployeeContext.Provider value={dataEmployee}>
        {children}
      </dataEmployeeContext.Provider>
    </>
  );
}

const useEmployee = () => {
  const employee = useContext(dataEmployeeContext);
  return employee;
};

const useDetailEmployee = (id) => {
  const employeeData= useContext(dataEmployeeContext);
  const result = employeeData.find((item) => item.id == id);
  return result;
};

export default EmployeeContext;
export { useEmployee, useDetailEmployee };
