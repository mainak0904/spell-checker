import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table';
import React from 'react'
import { CorrectedWord } from '../types/CorrectedWord';
import { RowColType } from '../types/RowCol';

type DataTableProps = {
    rows: CorrectedWord[];
    columns: RowColType[];

};

const DataTable: React.FC<DataTableProps> = ({ rows, columns }) => {

    return (
        <Table aria-label="Example table with dynamic content"
            isHeaderSticky
            bottomContentPlacement="outside"
            classNames={{
                wrapper: "max-h-[382px]",
            }}
        >
            <TableHeader>
                {columns.map((column) =>
                    <TableColumn key={column.key}>{column.value}</TableColumn>
                )}
            </TableHeader>
            <TableBody>
                {rows.map((row) =>
                    <TableRow>
                        {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default React.memo(DataTable)