import React from 'react'
import { Input } from "@nextui-org/input";
import { Button } from '@nextui-org/button';

const Test = () => {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="text" size={"sm"} label="Example" />
            <Button color="primary">
                Button
            </Button>
        </div>
    )
}

export default Test