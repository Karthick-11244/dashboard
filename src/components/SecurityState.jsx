import React, { useState } from 'react';


const statsData = {
  week: { sast: 10, sca: 10, container: 0, appsec: 0 },
  month: { sast: 40, sca: 35, container: 5, appsec: 3 },
  day: { sast: 2, sca: 1, container: 0, appsec: 0 },
};

const SecurityState = ({darkMode}) => {
  const [selectedTab, setSelectedTab] = useState('week');

  const activeData = statsData[selectedTab];

  const tabStyle = (tab) =>
    `px-4 py-1 rounded-md text-sm font-medium ${
      selectedTab === tab ? 'bg-gray-300 text-black' : 'text-gray-600'
    }`;

  const StatCircle = ({ value, label }) => (
    <div className="flex flex-col items-center space-y-2 mb-8 ">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-blue-700 shadow">
        {value}
      </div>
      <p className="text-sm font-semibold">{label}</p>
    </div>
  );

  return (
    <div className="p-4 bg-white max-w-xl mx-auto rounded-md shadow-md">
      <div className="flex space-x-4 justify-center mb-6">
        <button onClick={() => setSelectedTab('week')} className={tabStyle('week')}>Week</button>
        <button onClick={() => setSelectedTab('month')} className={tabStyle('month')}>Month</button>
        <button onClick={() => setSelectedTab('day')} className={tabStyle('day')}>Day</button>
      </div>

      <div className="flex justify-around ">
        <StatCircle value={activeData.sast} label="SAST" />
        <StatCircle value={activeData.sca} label="SCA" />
        <StatCircle value={activeData.container} label="CONTAINER SCAN" />
        <StatCircle value={activeData.appsec} label="APP SEC" />
      </div>
    </div>
  );
};

export default SecurityState;