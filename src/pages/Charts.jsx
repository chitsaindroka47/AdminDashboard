import React from 'react';
import './Charts.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', users: 300 },
  { name: 'Tue', users: 500 },
  { name: 'Wed', users: 200 },
  { name: 'Thu', users: 700 },
  { name: 'Fri', users: 400 },
];

export default function Charts() {
  return (
    <div className="charts-container">
      <h2 className="charts-title">User Growth Analytics</h2>

      <div className="charts-grid">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="chart-card">
            <h4>Chart {index + 1}</h4>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#007bff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      <div className="large-chart-card">
        <h3>Overall Weekly Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#28a745" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
