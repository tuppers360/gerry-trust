import React from 'react';

function FormInfoMessage(status) {
  return (
    <div className="p-4 bg-yellow-100 border-l-4 border-yellow-400 rounded-md">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg
            className="w-8 h-8 text-yellow-400"
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
          <h3 className="font-bold text-yellow-800 text-xl">
            There was a problem sending your message
          </h3>
          <div className="mt-2 text-md text-yellow-700">
            {/* <p>{status.info.msg}</p> */}
            <p className="mt-2">
              Please try again, if the problem persists please try another
              method.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormInfoMessage;
