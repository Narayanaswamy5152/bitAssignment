import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const PerformanceByGender = props => {
  const {performanceByGenderDetails} = props

  return (
    <div className="performance-by-age-container">
      <h1 className="performance-by-age-heading">KEY PERFORMANCE INDICATORS</h1>
      <p className="performance-by-age-paragraph">GENDER</p>
      <PieChart width={1000} height={200}>
        <Pie
          data={performanceByGenderDetails}
          cx="50%"
          cy="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="MALE=756" fill="#2d87bb" />
          <Cell name="FEMALE=340" fill="#a3df9f" />
          <Cell name="TOTAL USERS=1096" fill="#64C2A6" />
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

export default PerformanceByGender
