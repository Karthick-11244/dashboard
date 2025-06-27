import React from "react";

const Aifinding = () => { return ( <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6"> <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl"> <h2 className="text-xl font-semibold text-gray-800 mb-6"> AI - Enhanced Findings Funnel </h2>

{/* Info Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className="bg-yellow-200 text-yellow-900 rounded-lg p-6 text-center shadow">
        <div className="text-sm font-medium">Total Findings</div>
        <div className="text-3xl font-bold mt-1">590</div>
      </div>
      <div className="bg-red-200 text-red-900 rounded-lg p-6 text-center shadow">
        <div className="text-sm font-medium">Actual Findings</div>
        <div className="text-3xl font-bold mt-1">586</div>
      </div>
      <div className="bg-rose-200 text-rose-900 rounded-lg p-6 text-center shadow">
        <div className="text-sm font-medium">Immediate</div>
        <div className="text-3xl font-bold mt-1">5</div>
      </div>
    </div>

    {/* Funnel Graph */}
    <div className="relative w-full h-64">
      <svg viewBox="0 0 500 250" className="w-full h-full">
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#fca5a5" />
          </linearGradient>
        </defs>
        <path
          d="M 0 0 Q 250 250 500 250 L 0 250 Z"
          fill="url(#gradient)"
          stroke="none"
        />
      </svg>
    </div>
  </div>
</div>

); };

export default Aifinding;