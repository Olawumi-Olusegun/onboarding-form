"use client";

import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  fullName: string;
  email: string;
}


export default function PersonalInfoForm() {

  const [isLoading, setIsLoading] = useState(false);

  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      fullName: "",
      email:""
    }
  });



  const processData: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(processData)} className='px-12 py-4'>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Personal Info
        </h5>
        <p>
          Please provide your name, email address and phone number
        </p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <Input 
        label='Full Name'
        {...register("fullName") }
        // errors={errors}
        />

        <Input 
        label='Email Address'
        {...register("email") }
        // errors={errors}
        />



      </div>
      
    </form>
  )
}