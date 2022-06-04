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
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Web" fill="#fecba6" />
          <Cell name="Mobile" fill="#b3d23f" />
          <Cell name="Design" fill="#a44c9e" />
          <Cell name="Consultation" fill="#fd7f0e" />
          <Cell name="Other" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Pie_chart