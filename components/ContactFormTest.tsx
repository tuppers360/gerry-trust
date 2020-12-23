import React from 'react';

export default function ContactFormTest() {
  return (
    <div className="bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">
            Send us a message
          </h2>
        </div>
        <div className="mt-8">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-900 focus:border-blue-900 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-900 focus:border-blue-900 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-900 focus:border-blue-900 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-900 focus:border-blue-900 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-blue-900 focus:border-blue-900 rounded-md"
                  >
                    <option>GB</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full pl-20 focus:ring-blue-900 focus:border-blue-900 border-gray-300 rounded-md"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-900 focus:border-blue-900 border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    aria-pressed="false"
                    className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                  >
                    <span className="sr-only">Agree to policies</span>

                    <span
                      aria-hidden="true"
                      className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    ></span>
                  </button>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>
                    and
                    <a href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
