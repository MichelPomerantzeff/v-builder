import React from 'react';
import { PieChart, Pie } from 'recharts'


function Chart(props) {

    const data = [
        { name: "a", value: 2.5 },
        { name: "b", value: 1 },
        { name: "c", value: 2 },
        { name: "d", value: 3 },
    ]

    return (
        <PieChart width={200} height={200}>
            <Pie
                dataKey="value"
                // isAnimationActive={false}
                data={data}
                cx={100}
                cy={100}
                // outerRadius={80}
                fill="#18446247"
                // label
            >

            </Pie>
        </PieChart>
    );
}

export default Chart;