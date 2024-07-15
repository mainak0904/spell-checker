'use client'

import React from 'react'
import FileUploader from './CSVUploader'
import WordChecker from './WordChecker'
import { Tabs, Tab } from '@nextui-org/tabs';
import { Card, CardBody } from '@nextui-org/card';

const SpellCheckerContainer = () => {

    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Options">
                <Tab key="wordChecker" title="Check Word">
                    <Card className='w-full'>
                        <CardBody>
                            <WordChecker />
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="csvUploader" title="Upload File">
                    <Card className='w-full'>
                        <CardBody>
                            <FileUploader />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}

export default SpellCheckerContainer