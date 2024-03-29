"use client";

import React, { useState } from "react";
import { ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export default function NavButtons() {

    const dispatch = useDispatch();

    const [currentStep, setCurrentStep] = useState(0)


    const handlePrevious = () => {
      // Decrement the current step by 1 and dispatch the action
      setCurrentStep((prevState) => prevState + 1 )
    };
    
  return (
    <div className="flex justify-between items-center">
      <button
          type="button"
          onClick={handlePrevious}
          className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>

        <button
        type="submit"
        className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        <span>Next</span>
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  )
}