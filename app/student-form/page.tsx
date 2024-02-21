
import React from 'react'
import StepForm from '@/components/multi-step-form/StepForm'
import Steps from '@/components/multi-step-form/Steps'


export default function StudentForm() {

    const steps = [
        {
            number: 1,
            title: "Personal Information",
        },
        {
            number: 2,
            title: "Education Background",
        },
        {
            number: 3,
            title: "Programming Experience",
        },
        {
            number: 4,
            title: "Preferred Programming Language",
        },
        {
            number: 5,
            title: "Techinical Skill Assessment",
        },
    ];


  return (
    <div className='bg-blue-50 min-h-screen p-4'>
        <div className="mx-auto w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-6 dark:bg-gray-800 dark:border-gray-700 grid grid-cols-12 gap-4 min-h-screen">
                <Steps />
            <div className="rounded-lg col-span-full md:col-span-8">
                <StepForm />
            </div>
        </div>
    </div>
  )
}