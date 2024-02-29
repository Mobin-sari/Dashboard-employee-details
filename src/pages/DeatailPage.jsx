import { useParams } from "react-router-dom";
import Chart from "../components/Chart";
import HeaderDetailPage from "../components/HeaderDetialPage";
import IntroductionEmployee from "../components/IntroductionEmployee";
import Salary from "../components/Salary";
import { useDetailEmployee } from "../context/EmployeeContext";

function DeatailPage() {
  const { id } = useParams();
  const resultEmployeeID = useDetailEmployee(+id);
  return (
    <>
      <h1>head</h1>
      <HeaderDetailPage data={resultEmployeeID} />
      <IntroductionEmployee data={resultEmployeeID} />
      <div>
        <Salary data={resultEmployeeID} />
        <Chart data={resultEmployeeID} />
      </div>
    </>
  );
}

export default DeatailPage;
