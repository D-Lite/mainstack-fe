import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { IGraphData } from '../../types/interfaces.types';
import { Box } from '@chakra-ui/react';

interface PageViewGraphProps {
    data: IGraphData[];
}
const PageViewGraph = ({ data }: PageViewGraphProps) => {

    return (
        <Box style={{ width: '100%', height: 500 }}>
            <ResponsiveContainer>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FF5403" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#FF5403" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey='key' />
                    <YAxis />
                    <CartesianGrid strokeDasharray="10 2" />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#FF5403" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    )
};

export default PageViewGraph;