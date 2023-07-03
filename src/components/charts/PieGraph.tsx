import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { IPieDataForLocation, IPieDataForSources } from '../../types/interfaces.types';

interface LocationPieGraphProps {
    data: IPieDataForLocation[] | IPieDataForSources[];
    colors: Array<string>;
    type: string;
}


const PieGraph = ({ data, colors, type }: LocationPieGraphProps) => {
    return (
        <div style={{ width: '100%', height: 230, overflow: 'hidden' }}>
            <ResponsiveContainer >
                <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }} >
                    <Pie blendStroke dataKey="percent" nameKey={type} data={data} innerRadius={65} outerRadius={100} fill="#82ca9d">
                        {data.map((entry, index) => (
                            <Cell key={`Cell-${entry.count}-${index}`} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieGraph;
