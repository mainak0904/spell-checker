import React, { useState } from 'react';
import FileUploadButton from './common/FileUploader';
import { PiUploadSimpleBold, PiXCircleBold } from 'react-icons/pi';
import { CorrectedWord } from '../types/CorrectedWord';
import DataTable from './DataTable';
import { parse, unparse } from 'papaparse';
import { Button } from '@nextui-org/button';

const CSVUploader = () => {
    const [rowData, setRowData] = useState<CorrectedWord[] | null>(null);

    const columns = [
        { key: 'original', value: 'Original' },
        { key: 'corrected', value: 'Corrected' }
    ];

    const onUpload = (file: File) => {
        const reader = new FileReader();

        reader.onload = () => {
            const csvText = reader.result as string;

            parse(csvText, {
                header: true, // Assume headers for original and corrected columns
                skipEmptyLines: true, // Skip empty lines
                complete: (result) => {
                    const wordList: CorrectedWord[] = result.data.map((row: any) => ({
                        original: row.original,
                        corrected: row.corrected,
                    }));

                    console.log(wordList);
                    setRowData(wordList);
                }
            });
        };

        reader.readAsText(file);
    };

    const downloadCsv = () => {
        if (rowData) {
            const csv = unparse(rowData);
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'corrected_words.csv';
            a.click();
            URL.revokeObjectURL(url);
        }
    };

    return (
        <div className='mx-4'>
            <div className='flex mb-4'>
                <FileUploadButton
                    size='lg'
                    accept='.csv'
                    className='mr-5'
                    startContent={<PiUploadSimpleBold />}
                    rejectProps={{ color: 'danger', startContent: <PiXCircleBold /> }}
                    onUpload={(files) => {
                        if (files.length > 0) {
                            onUpload(files[0]);
                        }
                    }}
                >
                    Upload
                </FileUploadButton>

                <Button
                    onClick={downloadCsv}
                    color="primary"
                    size='lg'
                    disabled={!rowData}
                >
                    Download CSV
                </Button>
            </div>
            <div className='flex w-full justify-between'>
                {rowData && <div className='py-4 w-50'>
                    <h1 className='mb-4'>Input</h1>
                    {rowData && <DataTable rows={rowData} columns={columns} />}
                </div>}

                {rowData && <div className='w-50 py-4'>
                    <h1 className='mb-4'>Output</h1>
                    {rowData && <DataTable rows={rowData} columns={columns} />}
                </div>}

            </div>

        </div>
    );
};

export default CSVUploader;
