import React, { useState } from 'react'
import FileUploadButton from './common/FileUploader'
import { PiUploadSimpleBold, PiXCircleBold } from "react-icons/pi";
import { CorrectedWord } from '../types/CorrectedWord';
import DataTable from './DataTable';



const CSVUploader = () => {
    const [rowData, setRowData] = useState<CorrectedWord[]>();
    const onUpload = async (file: Blob) => {
        const formData = new FormData();
        formData.append('file', file);
        const dynamicData: Response = await fetch(`https://...`, { cache: 'no-store', method: 'POST', body: formData })
        setRowData(await dynamicData.json());
    }

    return (
        <>
            <FileUploadButton
                size='lg'
                accept='csv/*'
                startContent={<PiUploadSimpleBold />}
                rejectProps={{ color: 'danger', startContent: <PiXCircleBold /> }}
                onUpload={files => {
                    onUpload(files[0]);
                }}
            >
                Upload
            </FileUploadButton>
            {rowData && < DataTable rows={rowData} columns={[]} />}
        </>
    )
}

export default CSVUploader