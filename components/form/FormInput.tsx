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
            className={`py-3 px-4 block w-full shadow-sm rounded-md sm:text-sm ${
              errors[label]
                ? `pr-10 border-red-300 text-red-600 dark:text-red-500 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 inset-1`
                : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300 text-slate-700'
            }`}
            type={type}
            {...register(label)}
            placeholder={placeholder}
          />
          {errors[label] && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ExclamationCircleIcon className="w-5 h-5 text-red-600 dark:text-red-500" />
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
