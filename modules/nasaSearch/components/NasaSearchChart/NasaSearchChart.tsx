import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import CustomTooltip from './CustomTooltip'
import ChartContainer from './ChartContainer'

type NasaSearchChartProps = {
  data: any
}

const NasaSearchChart: React.FC<NasaSearchChartProps> = ({ data }) => {
  const width = data.length * 200
  return (
    <ChartContainer>
      <AreaChart
        width={width}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="numberOfImages" domain={[0, 1]} allowDecimals={false} />
        <Tooltip content={CustomTooltip} />
        <Area type="monotone" dataKey="numberOfImages" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ChartContainer>
  )
}

export default NasaSearchChart