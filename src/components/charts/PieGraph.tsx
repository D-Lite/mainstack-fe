import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { IPieDataForLocation, IPieDataForSources } from '../../types/interfaces.types';

interface LocationPieGraphProps {
    data: IPieDataForLocation[] | IPieDataForSources[];
}


const PieGraph = ({ data }: LocationPieGraphProps) => {
    const colors: Array<string> = ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468'];
    return (
        <div style={{ width: '100%', height: 230, overflow: 'hidden' }}>
            <ResponsiveContainer >
                <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }} >
                    <Pie blendStroke dataKey="percent" nameKey={data[0]?.source ? "source" : "country"} data={data} innerRadius={65} outerRadius={100} fill="#82ca9d">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieGraph;
