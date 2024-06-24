
import React from 'react'

export default function Home() {
  return (
    <div className='max-w-6xl mx-auto p-3 space-y-4'>
      <h1 className='text-2xl font-medium text-orange-600'>Inquiry Form</h1>
      <form className='grid grid-cols-1'>
        <label className='flex gap-4'>Name: <input type="text" name="name" className='border-2 border-black px-2 rounded-md'/></label>
        <label className='flex gap-4'>Email: <input type="email" name="email" className='border-2 border-black px-2 rounded-md'/></label>
        <label className='flex gap-4'>Zip Code: <input type="text" name="zipcode" className='border-2 border-black px-2 rounded-md'/></label>
        <label className='flex gap-4'>Service: 
        <select className='border-2 border-black px-2 rounded-md'>
          <option value="Assisted Living">Assisted Living</option>
          <option value="Home Care">Home Care</option>
          <option value="Home Health">Home Health</option>
          <option value="Independent Living">Independent Living</option>
        </select>
        </label>
        <button type="submit" className='max-w-24 bg-slate-400 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}
