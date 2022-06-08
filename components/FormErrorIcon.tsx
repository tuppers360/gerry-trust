import { ExclamationCircleIcon } from '@heroicons/react/solid';

export default function FormErrorIcon() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
    </div>
  );
}
