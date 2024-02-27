"use client";

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

type Props = {}

export default function PersonalInfoForm({}: Props) {

  const [isLoading, setIsLoading] = useState(false);

  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {}
  });


  async function processData(data: any) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(processData)} className='px-12 py-4'>
      <div className="mb-8"></div>
    </form>
  )
}