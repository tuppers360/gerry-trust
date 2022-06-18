import { ExclamationCircleIcon } from '@heroicons/react/solid';

export function FormInput(errors) {
  return ({ label, type, register, placeholder, labelText }) => {
    return (
      <>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          {labelText}
        </label>
        <div className="relative mt-1">
          <input
            className={`block w-full rounded-md py-3 px-4 shadow-sm sm:text-sm ${
              errors[label]
                ? `inset-1 border-red-300 pr-10 text-red-600 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:text-red-500`
                : 'border-gray-300 text-slate-700 focus:border-blue-900 focus:ring-blue-900'
            }`}
            type={type}
            {...register(label)}
            placeholder={placeholder}
          />
          {errors[label] && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-600 dark:text-red-500" />
            </div>
          )}
        </div>
        {errors[label] && (
          <p
            className="mt-2 text-sm text-red-600 dark:text-red-500"
            id="email-error"
          >
            <span>{errors[label].message}</span>
          </p>
        )}
      </>
    );
  };
}
