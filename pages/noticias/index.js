import React from 'react'
import { Chart } from "react-google-charts";

const index = () => {

    const data = [
        ["Year", "Alunos formados", "Expenses", ],
        ["2014", 1000, 400 ],
        ["2015", 1170, 460 ],
        ["2016", 660, 1120 ],
        ["2017", 1030, 540 ],
      ];
     
      const options = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      };

  return (
    <Chart
    chartType="Bar"
    width="100%"
    height="400px"
    data={data}
    options={options}
  />
  )
}

export default index
