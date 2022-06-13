import React from 'react';
import { XCircleIcon } from '@heroicons/react/solid';

function FormErrorMessage() {
  return (
    <div className="p-4 bg-red-100 border-l-4 border-red-400 rounded-md">
      <div className="flex">
        <div className="flex-shrink-0 mt-1">
          <XCircleIcon className="w-5 h-5 text-red-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-semibold text-red-800">
            Sorry, there was a problem with the form
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p>
              Please see the form fields below for more information on how to
              solve the issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormErrorMessage;
