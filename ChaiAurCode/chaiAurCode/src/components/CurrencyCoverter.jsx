import React from 'react'
import CurrencyInput from './CurrencyInput.jsx'

function CurrencyCoverter() {
  return (
    <div className='z-10 className="font-sans rounded-lg backdrop-blur-sm bg-black/50 max-w-[600px] text-xl w-full py-4 px-6 text-white flex flex-col gap-6'>
      <h1 className='text-xl text-center'>Currency Converter</h1>
      <div>
        <CurrencyInput/>
      </div>
    </div>
  )
}

export default CurrencyCoverter
