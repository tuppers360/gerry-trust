/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { CameraIcon } from '@heroicons/react/solid';

export default function Example() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 py-8 mx-auto mb-48 max-w-7xl sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div className="col-span-2">
            <h3 className="text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500 sm:text-7xl md:leading-tight">
              50 Year Anniversary
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="object-cover object-center rounded-lg shadow-lg"
                    src="images/gerry_richardson.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-base max-w-prose lg:max-w-none">
              <p className="text-lg font-semibold text-gray-500">
                23rd August 1971, marks the 50th anniversary of the death of
                Supt Gerry Richardson who was killed in the line of duty, whilst
                attending an armed robbery in Blackpool on 23rd August 1971.
                Gerry was aged just 38.
              </p>
            </div>
            <div className="mx-auto mt-5 prose text-gray-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Lancashire Police's chief constable joined trustees and other
                officers to lay flowers at Supt Richardson's grave in Layton
                Cemetery, Blackpool.
              </p>
              <p>
                Richardson assisted in a chase of a gang of five armed robbers
                who had attacked a jeweler's shop just yards from Blackpool's
                North Pier, which was bustling with visitors. He and PC Carl
                Walker, who also later won the George Cross, chased one of the
                raiders, Frederick Joseph Sewell (known as 'Fat' Fred'), down a
                dead-end alleyway.
              </p>
              <p>
                Sewell shot Walker in the thigh before Richardson tackled the
                gunman and attempted to persuade him to surrender his weapon.
                However, Richardson was shot twice in the stomach at point-blank
                range and died of his injuries later that day.
              </p>
              <p>
                The 38-year-old's killing shocked the country and at one stage
                even led to a parliamentary attempt to restore the death
                penalty.
              </p>
              <p>
                More than 100,000 people lined the streets of Blackpool for the
                officer's funeral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
