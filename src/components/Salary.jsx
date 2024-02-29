import { salaryData } from "../data/salaryData";
function Salary({ data }) {
  const salary = salaryData.find((item) => item.id === data.id);

  return (
    <div>
      <div>
        <p>Total sales</p>
        <span>{salary.sales[0].yearly}</span>
        <p>Yearly</p>
      </div>
      <div>
        <p>Total sales</p>
        <span>{salary.sales[0].monthly}</span>
        <p>Monthly</p>
      </div>
      <div>
        <p>Total sales</p>
        <span>{salary.sales[0].weekly}</span>
        <p>weekly</p>
      </div>
    </div>
  );
}

export default Salary;
