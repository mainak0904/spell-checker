import React, { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { CorrectedWord } from '../types/CorrectedWord';


const WordChecker = () => {
    const [word, setWord] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [correctedWord, setCorrectedWord] = useState<CorrectedWord>({})

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value.trim()); // Trim leading/trailing spaces
    };

    const handleCheckSpelling = async () => {
        if (!word) return; // Handle empty input

        setErrorMessage(''); // Clear any previous error message

        try {
            const response = await fetch('http://127.0.0.1:5000/corrected', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ original: word }),
            });

            if (!response.ok) {
                throw new Error('Error fetching spell correction');
            }

            const correctedWord: CorrectedWord = await response.json();
            setCorrectedWord(correctedWord)
            console.error("Response received:", JSON.stringify(response));

        } catch (error) {
            console.error('Error fetching spell correction:', error);
            setErrorMessage('An error occurred while checking spelling. Please try again.');
        }
    };

    return (
        <div className="flex w-full flex-wrap gap-4">
            <Input
                label="Word"
                value={word}
                size={"sm"}
                placeholder={"Enter words for spell checking"}
                onChange={handleInputChange}
                type="text"
                className="max-w-xs"
            />
            <Button
                onClick={handleCheckSpelling}
                color="primary"
                size='lg'
            >Check Spelling</Button>
            <div className='flex'>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message if present */}
            </div>
            <div>
                {correctedWord && <div className='w-50'>
                    <div>
                        <span>Original : </span>
                        <span>{correctedWord.original}
                        </span>
                    </div>
                    <div>
                        <span>Corrected : </span>
                        <span>{correctedWord.corrected}
                        </span>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default WordChecker;