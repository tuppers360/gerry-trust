import { ExclamationCircleIcon } from '@heroicons/react/solid';

function FieldError() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <ExclamationCircleIcon className="h-5 w-5 text-red-600 dark:text-red-500" />
    </div>
  );
}

export default FieldError;
