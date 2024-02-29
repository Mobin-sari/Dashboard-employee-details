import { useParams } from "react-router-dom";

import Chart from "../components/Chart";
import HeaderDetailPage from "../components/HeaderDetialPage";
import IntroductionEmployee from "../components/IntroductionEmployee";
import Salary from "../components/Salary";

import { useDetailEmployee } from "../context/EmployeeContext";

import styles from "../styles/detailPage.module.css";
import { useState } from "react";

function DeatailPage() {
  const { id } = useParams();

  const resultEmployeeID = useDetailEmployee(+id);
  
  const [result, setResult] = useState(resultEmployeeID)

  return (
    <>
      <HeaderDetailPage data={result} />
      <IntroductionEmployee data={result} />
      <div className={styles.sidebar}>
        <div>
          <Salary data={result} />
        </div>
        <div>
          <Chart data={result} />
        </div>
      </div>
    </>
  );
}

export default DeatailPage;
