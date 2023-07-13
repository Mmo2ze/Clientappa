import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import "./categories.css"


const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
 
];



const COLORS = ['#0088FE', '#ff0000'];




const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};





function Categories() {
  return (
    <div className='cont circle'>
      <h3 className='title'>The percentage of absent students</h3>
            <div className="presence">
              <div className="set_presence"></div>
              <p>The percentage of students who did not attend</p>
            </div>
            <div className="absence">
              <div className="set_absence"></div>
              <p>The percentage of students who attended</p>        
            </div>
            
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
  </div>  
  )
}

export default Categories


