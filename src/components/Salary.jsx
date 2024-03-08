import { salaryData } from "../data/salaryData";

import { FaArrowTrendUp } from "react-icons/fa6";

import styles from "../styles/salary.module.css";

function Salary({ data }) {
  const salary = salaryData.find((item) => item.id === data.id);
  console.log(salary.percent[0]);
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.label}>Total sales</p>
        <span>
          {salary.sales[0].yearly}{" "}
          <span className={styles.percent}>
            {salary.percent[0].pyearly} <FaArrowTrendUp />{" "}
          </span>{" "}
        </span>
        <p className={styles.date}>Yearly</p>
      </div>
      <div>
        <p className={styles.label}>Total sales</p>
        <span>
          {salary.sales[0].monthly}{" "}
          <span className={styles.percent}>
            {salary.percent[0].pmonthly} <FaArrowTrendUp />{" "}
          </span>
        </span>
        <p className={styles.date}>Monthly</p>
      </div>
      <div>
        <p className={styles.label}>Total sales</p>
        <span>
          {salary.sales[0].weekly}{" "}
          <span className={styles.percent}>
            {salary.percent[0].pweekly} <FaArrowTrendUp />{" "}
          </span>
        </span>
        <p className={styles.date}>weekly</p>
      </div>
    </div>
  );
}

export default Salary;
