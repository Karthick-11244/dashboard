import React, { useState } from 'react'; import { ResponsiveContainer, BarChart, Bar, YAxis, Tooltip, CartesianGrid, } from 'recharts';

const dataSets = { test1: [ { id: 1, value: 1 }, { id: 2, value: 1 }, ], test2: [ { id: 1, value: 0.5 }, { id: 2, value: 0.75 }, ], test3: [ { id: 1, value: 1 }, { id: 2, value: 0 }, ], };

const CustomTooltip = ({ active, payload }) => { if (active && payload && payload.length) { return ( <div className="bg-white border border-gray-300 text-black px-2 py-1 text-sm rounded shadow"> Value: {payload[0].value} </div> ); } return null; };

export default function FindingTrends() { const [selectedTest, setSelectedTest] = useState('test1'); const data = dataSets[selectedTest];

return ( <div className="bg-gray-100 min-h-screen p-6"> <div className="bg-white rounded-lg shadow p-4 max-w-xl mx-auto mt-10"> <div className="flex justify-between items-center mb-4"> <h2 className="text-md font-medium text-gray-600">Findings Trend</h2> <select value={selectedTest} onChange={(e) => setSelectedTest(e.target.value)} className="border border-gray-300 rounded px-2 py-1" > <option value="test1">test1</option> <option value="test2">test2</option> <option value="test3">test3</option> </select> </div>

<ResponsiveContainer width="100%" height={150}>
      <BarChart data={data} barSize={20}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <YAxis domain={[0, 1]} tickCount={5} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" fill="#e11d48" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>

    <p className="text-sm mt-3 font-medium text-gray-700">
      <span className="text-xl font-bold">0%</span> Your total findings were 0% higher compared to the previous 10 scans
    </p>
  </div>
</div>

); }