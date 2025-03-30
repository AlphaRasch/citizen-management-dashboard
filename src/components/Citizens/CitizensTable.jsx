import React from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

export default function CitizensTable({ data, onRowClick }) {
    const columns = [
        {
            header: 'ФИО',
            accessorKey: 'fullName',
            cell: info => info.getValue()
        },
        {
            header: 'Дата рождения',
            accessorKey: 'birthDate',
            cell: info => {return new Date(info.getValue()).toLocaleDateString('ru-RU').toString()}
        },
        {
            header: 'Статус',
            accessorKey: 'status',
            cell: info => info.getValue()
        }
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div className="virtualized-table">
            <div style={{ 
                display: 'flex', 
                backgroundColor: '#f5f5f5',
                borderBottom: '2px solid #ddd',
                fontWeight: 'bold'
            }}>
                {table.getHeaderGroups().map(headerGroup => (
                    headerGroup.headers.map(header => (
                        <div 
                            key={header.id}
                            style={{
                                padding: '8px',
                                width: header.column.getSize(),
                                flexShrink: 0
                            }}
                        >
                            {header.column.columnDef.header}
                        </div>
                    ))
                ))}
            </div>

            {table.getRowModel().rows.map(row => (
                <div key={row.id} onClick={() => onRowClick(row.original)}
                    style={{ display: 'flex', borderBottom: '1px solid #eee' }}>
                    {row.getVisibleCells().map(cell => (
                        <div key={cell.id} style={{
                            padding: '8px',
                            width: cell.column.getSize(),
                            flexShrink: 0
                        }}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}