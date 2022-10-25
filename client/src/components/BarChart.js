import { BarChart as BC, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const BarChart = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={450}>
        <BC data={data} margin={{top:50}}>
            <CartesianGrid strokeDasharray='2 2' />
            <XAxis dataKey='date' />
            <YAxis allowDecimals={false} />
            <Tooltip  />
            <Bar dataKey='count' fill='#2cb1bc' barSize={75} />
        </BC>
    </ResponsiveContainer>
  )
}
export default BarChart