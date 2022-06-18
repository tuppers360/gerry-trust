import React from 'react';

function FormConfirmationMessage() {
  return (
    <div className="rounded-md border border-l-4 border-green-400 bg-green-100 p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg
            className="h-8 w-8 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-xl font-bold text-green-800">
            Your message has been sent
          </h3>
          <div className="text-md mt-2 text-green-700">
            <p>Please allow us a short while to respond.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormConfirmationMessage;
