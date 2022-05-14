import React from 'react'
import Vinyl from '../Vinyl'
import Needle from './Needle'
export default function Table() {
  return (
    <div className='w-full h-full rounded-lg border-purple border-2 relative'>
        <Needle />
        <div className=''>
            <Vinyl className="middle-screen" image=""/>
        </div>
    </div>
  )
}
