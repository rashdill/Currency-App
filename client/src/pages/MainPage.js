import React from 'react'

export default function MainPage() {
  return (
    <div>
      {/* lg for media(responsivenes)*/}
      <h1 className="lg:mx-32 text-5xl font-bold text-pink-600">Convert Your Currencies Today</h1>
      <p className="lg:mx-32 opacity-40 py-6">
        Welcome to "Convert Your Currencies Today!" This application allows you to easily convert currencies based on the latest exchange rates.
        Wheather you are planning a trip,managing your finances or simply curious about the value of your money in differentt currencies, this tool is here to help. 
      </p>
      <div>
        <section>
          <form>
          <div class="mb-5">
            <label htmlFor="" 
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date</label>
            <input 
            type="Date"
             id="" 
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-600 dark:focus:border-pink-600" placeholder="name@flowbite.com" required />
          </div>

           
          </form>
        </section>
      </div>
    </div>
  )
}
