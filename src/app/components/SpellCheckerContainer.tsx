'use client'

import React from 'react'
import FileUploader from './CSVUploader'
import WordChecker from './WordChecker'
import { Divider } from "@nextui-org/divider";

const SpellCheckerContainer = () => {

    return (
        <div className='space-y-4'>
            <div className='flex'>
                <div className='w-50'>
                    <WordChecker />
                </div>
            </div>
            <Divider className="my-40" />
            <div className='w-full'>
                <FileUploader />
            </div>
        </div>
    )
}

export default SpellCheckerContainer