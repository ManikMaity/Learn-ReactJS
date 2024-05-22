/* eslint-disable react/prop-types */
import React from 'react'

function CurrencyInput({
    label = "Label",
    className = "",
    onAmmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabaled = false
}) {
   

    return (
        <div className={`bg-white text-black p-3 rounded-lg text-base flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input
                    min={1}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                >
                    
                        <option value="usd">
                            usd
                        </option>
                
                </select>
            </div>
        </div>
    );
}

export default CurrencyInput
