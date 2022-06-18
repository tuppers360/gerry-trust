import React from 'react';
import { XCircleIcon } from '@heroicons/react/solid';

function FormErrorMessage() {
  return (
    <div className="rounded-md border-l-4 border-red-400 bg-red-100 p-4">
      <div className="flex items-center">
        <div className="mt-1 flex-shrink-0">
          <XCircleIcon className="h-8 w-8 text-red-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-xl font-bold text-red-800">
            Sorry, there was a problem with the form
          </h3>
          <div className="text-md mt-2 text-red-700">
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
