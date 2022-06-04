import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

const data = [
  {
    count: 763,
    service: "Web",
  },
  {
    count: 321,
    service: "Mobile",
  },
  {
    count: 69,
    service: "Design",
  },
    {
      count: 154,
      service: "Consultation",
    },
    {
      count: 696,
      service: "Other",
    },
]

const Pie_chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="35%"
          outerRadius="50%"
          dataKey="count"
        >
          <Cell name="Web" fill="#00A15D" />
          <Cell name="Mobile" fill="#8621C4" />
          <Cell name="Design" fill="#FAF119" />
          <Cell name="Consultation" fill="#FF5151" />
          <Cell name="Other" fill="#6499FF" />
        </Pie>
        <Legend
          iconType="square" values={data.count}
          layout="vertical"
          verticalAlign="middle"
          align="Left"
        />
       
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Pie_chart