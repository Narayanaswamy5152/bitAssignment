import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const PerformanceByAge = props => {
  const {performanceByAgeDetails} = props

  return (
    <div className="performance-by-age-container">
      <p className="performance-by-age-paragraph">EMPLOYMENT TYPE</p>
      <PieChart width={1000} height={245}>
        <Pie
          data={performanceByAgeDetails}
          cx="50%"
          cy="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="DAILY WAGE=417" fill="#2d87bb" />
          <Cell name="PART TIME=350" fill="#a3df9f" />
          <Cell name="FULL TIME=300" fill="#64C2A6" />
        </Pie>

        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default PerformanceByAge
