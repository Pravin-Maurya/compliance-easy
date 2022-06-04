import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts"

const data = [
  {group_name: "Week 01",
    data_1:400000,
    data_2:500000,
  },
  {group_name: "Week 01",
    data_1:400000,
    data_2:500000,
  },
  {group_name: "Week 02",
    data_1:230000,
    data_2:190000,
  },
  {group_name: "Week 03",
    data_1:800000,
    data_2:350000,
  },
  {group_name: "Week 04",
    data_1:400000,
    data_2:640000,
  },
  {group_name: "Week 05",
  data_1:230000,
  data_2:430000,
},
  
]

const Bar_chart = () => {
  const DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="group_name"
          tick={{
            stroke: "gray",
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: "gray",
            strokeWidth: 0,
          }}
        />
        <Bar dataKey="data_1" name="data_1" fill="#00A15D" barSize="20%" />
        <Bar dataKey="data_2" name="data_2" fill="#FF5151" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Bar_chart