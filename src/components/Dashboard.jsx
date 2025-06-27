import React, { useState, useEffect } from "react";
import Aifinding from './Aifinding'
import SecurityState from './SecurityState.jsx'
import FindingTrends from './FindingTrends'
import { FiShield, FiAlertTriangle, FiClock, FiLock, FiActivity, FiBarChart2, FiRefreshCw } from "react-icons/fi";
import { Line, Pie, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SecurityDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const mockSecurityData = {
    incidents: 247,
    activeThreats: 12,
    systemHealth: 94,
    riskLevel: "Medium",
    networkIntrusions: 156,
    unauthorizedAccess: 89,
    malwareDetections: 34,
    keyRisks: [
      { id: 1, name: "Data Breach Risk", level: "High", impact: "Critical" },
      { id: 2, name: "Infrastructure Vulnerability", level: "Medium", impact: "Moderate" },
      { id: 3, name: "Compliance Gap", level: "Low", impact: "Minor" }
    ],
    activeProjects: [
      { id: 1, name: "Firewall Upgrade", progress: 75, status: "On Track" },
      { id: 2, name: "Zero Trust Implementation", progress: 45, status: "At Risk" },
      { id: 3, name: "Security Audit", progress: 90, status: "Near Complete" }
    ]
  };

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Security Incidents",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      }
    ]
  };

  const pieChartData = {
    labels: ["Network", "System", "Application"],
    datasets: [
      {
        data: [300, 150, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)"
        ]
      }
    ]
  };

  const barChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Threat Detections",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(153, 102, 255, 0.5)"
      }
    ]
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <FiRefreshCw className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  return (
   <>
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white pt-16" : "bg-gray-100 text-gray-800 pt-16"}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FiShield /> Security Dashboard
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200 "}`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-70">Number of Applications</p>
                <h2 className="text-2xl font-bold">{mockSecurityData.incidents}</h2>
              </div>
              <FiAlertTriangle className="text-3xl text-red-500" />
            </div>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-70">Number of services</p>
                <h2 className="text-2xl font-bold">{mockSecurityData.activeThreats}</h2>
              </div>
              <FiActivity className="text-3xl text-yellow-500" />
            </div>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-70">System Health</p>
                <h2 className="text-2xl font-bold">{mockSecurityData.systemHealth}%</h2>
              </div>
              <FiActivity className="text-3xl text-green-500" />
            </div>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-70">Risk Level</p>
                <h2 className="text-2xl font-bold">{mockSecurityData.riskLevel}</h2>
              </div>
              <FiBarChart2 className="text-3xl text-orange-500" />
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <h3 className="text-xl font-semibold mb-4">Weekly Threat Detection</h3>
            <Bar data={barChartData} options={{ responsive: true }} />
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <h3 className="text-xl font-semibold mb-4">Threat Distribution</h3>
            <Pie data={pieChartData} options={{ responsive: true }} />
          </div>
        </div> */}
        <Aifinding/>
        <SecurityState/>
        <FindingTrends/>
        

        <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg mb-8`}>
          <h3 className="text-xl font-semibold mb-4 pt-5">Key Risks</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left">Risk Name</th>
                  <th className="px-4 py-3 text-left">Level</th>
                  <th className="px-4 py-3 text-left">Impact</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockSecurityData.keyRisks.map((risk) => (
                  <tr key={risk.id} className="border-b border-gray-200">
                    <td className="px-4 py-3">{risk.name}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${risk.level === "High" ? "bg-red-100 text-red-800" : risk.level === "Medium" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}>
                        {risk.level}
                      </span>
                    </td>
                    <td className="px-4 py-3">{risk.impact}</td>
                    <td className="px-4 py-3">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className={`h-1.5 rounded-full ${risk.level === "High" ? "bg-red-500" : risk.level === "Medium" ? "bg-yellow-500" : "bg-green-500"}`} style={{ width: risk.level === "High" ? "80%" : risk.level === "Medium" ? "50%" : "20%" }}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg mb-8"}`}>
          <h3 className="text-xl font-semibold mb-4">Active Security Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockSecurityData.activeProjects.map((project) => (
              <div key={project.id} className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{project.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${project.status === "On Track" ? "bg-green-100 text-green-800" : project.status === "At Risk" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"}`}>
                    {project.status}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
                <p className="text-sm mt-2 text-right">{project.progress}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    

    </>
  );
};

export default SecurityDashboard;