"use client";

import React, { PropsWithChildren, useEffect, useState } from 'react'


export default function Container({children}: PropsWithChildren) {
    const [isMounted, setIsmounted] = useState(false);

    useEffect(() => {
        setIsmounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }
  return (
    <div className='p-2 max-w-screen-xl mx-auto'>
        {children}
    </div>
  )
}