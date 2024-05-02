import React, { useState } from 'react';

export default function MainPage() {
  // states for the form fields
  const [date, setDate] = useState();
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);

   // handlSubmit method
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, sourceCurrency, targetCurrency, amountInSourceCurrency);
  };

  return (
    <div>
      {/* lg for media(responsiveness) */}
      <h1 className="lg:mx-32 text-5xl font-bold text-pink-600">Convert Your Currencies Today</h1>
      <p className="lg:mx-32 opacity-40 py-6">
        Welcome to "Convert Your Currencies Today!" This application allows you to easily convert currencies based on the latest exchange rates.
        Whether you are planning a trip, managing your finances, or simply curious about the value of your money in different currencies, this tool is here to help.
      </p>
      <div className="mt-5 flex items-center justify-center flex-col">
        <section className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
            {/* This is date field */}
            <div className="mb-4">
              <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="Date"
                id={date}
                name={date}
                /*value={date}*/
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-600 dark:focus:border-pink-600"
                placeholder="Enter date"
                required
              />
            </div>
            {/* This is Source Currency field */}
            <div className="mb-4">
              <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Source Currency
              </label>
              <select
                onChange={(e) => setSourceCurrency(e.target.value)}
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600
                 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-pink-600 dark:focus:border-pink-600"
                required
                name={sourceCurrency}
                id={sourceCurrency}
                value={sourceCurrency}
              >
                <option value="">Select source currency</option>
                {/* Add your currency options here */}
              </select>
            </div>
            {/* This is Target Currency field */}
            <div className="mb-4">
              <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Target Currency
              </label>
              <select
                onChange={(e) => setTargetCurrency(e.target.value)}
               
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-600
                   dark:focus:border-pink-600"
                required
                name={targetCurrency}
                id={targetCurrency}
                value={targetCurrency}

              >
                <option value="">Select the Target Currency</option>
                {/* Add your currency options here */}
              </select>
            </div>
            {/* This is Amount field */}
            <div className="mb-4">
              <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Amount in source currency
              </label>
              <input
                onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                type="number"
                id={amountInSourceCurrency}
                name={amountInSourceCurrency}
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-600 dark:focus:border-pink-600"
                placeholder="Amount in source currency"
                required
              />
            </div>
            <button type="button" className="bg-pink-700 hover:bg-pink-900 text-white font-medium py-2 px-4 rounded-md">
              Get the target Currency
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}