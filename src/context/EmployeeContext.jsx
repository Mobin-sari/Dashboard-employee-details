import { createContext, useContext, useEffect, useState } from "react";
import EmployeeList from "../pages/EmployeeList";
import axios from "axios";
import { BASE_DATA } from "../config/data";

export const dataEmployeeContext = createContext();

function EmployeeContext({ children }) {
  const [dataEmployee, setDataEmployee] = useState([]);

  useEffect(() => {
    const fetchBaseData = async () => {
      const response = await axios.get(`${BASE_DATA}`).then((res) => {
        return res
      });
      setDataEmployee(response.data)
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

export default EmployeeContext;
export { useEmployee };
