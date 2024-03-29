import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import styles from "../styles/chart.module.css"

import { dataChart } from "../data/dataChart";

function Chart({ data }) {
  const chart = dataChart.find((item) => item.id === data.id);
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p>Sales Over view</p>
          </div>
          <div>
            <p>Yearly</p>
          </div>
        </div>
        <div className={styles.chart}>
          <LineChart
            width={500}
            height={300}
            data={chart.chart}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </>
  );
}

export default Chart;
