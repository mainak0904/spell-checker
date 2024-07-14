'use client'

import React from 'react'
import FileUploader from './CSVUploader'
import WordChecker from './WordChecker'

const SpellCheckerContainer = () => {

    return (
        <div className='space-y-4'>
            <div className='flex'>
                <div className='w-50'>
                    <WordChecker />
                </div>
            </div>
            <div className='w-full'>
                <FileUploader />
            </div>
        </div>
    )
}

export default SpellCheckerContainer