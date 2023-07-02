import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { IPieData } from '../../types/interfaces.types';

interface LocationPieGraphProps {
    data: IPieData[]
}


const LocationPieGraph = ({ data }: LocationPieGraphProps) => {

    return (
        <div style={{ width: '70%', height: 200 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="value" data={data} innerRadius={65} outerRadius={100} fill="#82ca9d">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LocationPieGraph;
