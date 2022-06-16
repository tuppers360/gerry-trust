import { useState } from 'react';

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      type="button"
      aria-pressed="false"
      onClick={() => setIsOn(!isOn)}
      className={`${
        isOn ? 'bg-blue-800' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      <span className="sr-only">Agree to policies</span>

      <span
        aria-hidden="true"
        className={`${
          isOn ? 'translate-x-5' : 'translate-x-0'
        } inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
      ></span>
    </button>
  );
}
