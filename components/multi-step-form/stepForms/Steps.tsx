
import React from 'react';
import Step from './Step';


type Step = {
  number: number;
  title: string;
}

type Props = {
  steps: Step[];
}

export default function Steps({steps}: Props) {
  return (
    <div className='rounded-lg col-span-full md:col-span-4 bg-blue p-10 flex flex-wrap flex-row justify-between md:flex-col md:justify-start gap-6 '>
        {
          steps.map((step, index) => <Step key={index} step={step} />)
        }
    </div>
  )
}