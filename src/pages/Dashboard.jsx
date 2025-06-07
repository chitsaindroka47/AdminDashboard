import React, { useState } from 'react';
import './Dashboard.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  LineChart, Line
} from 'recharts';
import { FaUsers, FaDollarSign, FaShoppingCart, FaRedo, FaBell } from 'react-icons/fa';

const salesData = [
  { name: 'Jan', sales: 30, revenue: 3000 },
  { name: 'Feb', sales: 45, revenue: 4500 },
  { name: 'Mar', sales: 60, revenue: 4000 },
  { name: 'Apr', sales: 70, revenue: 6000 },
];

export default function Dashboard() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Welcome Back, Admin</h2>
      </div>

      {showAlert && (
        <div className="dashboard-alert">
          <FaBell /> Sales dipped in March, review strategy.
          <button className="alert-close" onClick={() => setShowAlert(false)}>✖</button>
        </div>
      )}

      <div className="dashboard-widgets">
        <div className="widget-card">
          <FaDollarSign className="widget-icon" />
          <div>
            <h4>Revenue</h4>
            <p>$12,000</p>
          </div>
        </div>
        <div className="widget-card">
          <FaUsers className="widget-icon" />
          <div>
            <h4>New Users</h4>
            <p>350</p>
          </div>
        </div>
        <div className="widget-card">
          <FaShoppingCart className="widget-icon" />
          <div>
            <h4>Orders</h4>
            <p>198</p>
          </div>
        </div>
        <div className="widget-card">
          <FaRedo className="widget-icon" />
          <div>
            <h4>Repeat Buyers</h4>
            <p>42%</p>
          </div>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-box">
          <h4>Monthly Sales</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#5A9BFF" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h4>Revenue Trend</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#00b894" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="dashboard-activities">
        <h4>Recent Activities</h4>
        <ul>
          <li>🟢 3 new users signed up</li>
          <li>🔵 Order #234 shipped</li>
          <li>🔴 Payment failed for invoice #121</li>
          <li>🟡 Marketing campaign launched</li>
        </ul>
      </div>
    </div>
  );
}
