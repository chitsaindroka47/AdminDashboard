import React from 'react';
import './Tables.css'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

export default function Tables() {
  const data = React.useMemo(
    () => [
      { name: 'Alice', age: 25, email: 'alice@example.com', city: 'New York' },
      { name: 'Bob', age: 30, email: 'bob@example.com', city: 'Los Angeles' },
      { name: 'Charlie', age: 28, email: 'charlie@example.com', city: 'Chicago' },
      { name: 'Diana', age: 22, email: 'diana@example.com', city: 'Houston' },
      { name: 'Eve', age: 35, email: 'eve@example.com', city: 'Phoenix' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { header: 'Name', accessorKey: 'name' },
      { header: 'Age', accessorKey: 'age' },
      { header: 'Email', accessorKey: 'email' },
      { header: 'City', accessorKey: 'city' },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="tables-container">
      <h2 className="tables-title">User Information Table</h2>

      <div className="tables-wrapper">
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid-info">
        <div>
          <h4>Total Users</h4>
          <p>{data.length}</p>
        </div>
        <div>
          <h4>Average Age</h4>
          <p>{(data.reduce((acc, cur) => acc + cur.age, 0) / data.length).toFixed(1)}</p>
        </div>
        <div>
          <h4>Most Popular City</h4>
          <p>New York</p>
        </div>
      </div>
    </div>
  );
}
