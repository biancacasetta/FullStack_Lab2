import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

import { Assignment } from '../types';
import { useState } from 'react';

type Props = {
    data: Assignment[];
}

const columnHelper = createColumnHelper<Assignment>()

const columns = [
    columnHelper.accessor('employee_id', {
        header: "Employee ID",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('employee_name', {
        header: "Employee Name",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('project_name', {
        header: "Project Name",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('start_date', {
        header: "Start Date",
        cell: ({ getValue }) => {
            const date: Date = getValue();
            return date.toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            });
        },
        sortingFn: 'datetime',
    })
]

const Table: React.FC<Props> = ({ data }) => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
        }
    });

    return (
        <div className="w-1/2">
            <table className='w-full bg-blue-200 rounded-2xl overflow-hidden'>
                <thead className='bg-blue-400 text-white'>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(h => (
                                <th key={h.id} onClick={h.column.getToggleSortingHandler()}
                                className='hover:cursor-pointer select-none p-2 w-1/4'>
                                    {flexRender(h.column.columnDef.header, h.getContext())}
                                    {{
                                        asc: ' ⇧',
                                        desc: ' ⇩'
                                    }[h.column.getIsSorted() as string] ?? null}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className='text-center'>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className='p-2'>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;