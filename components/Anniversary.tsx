import Link from 'next/link';

export default function Example() {
  return (
    <div className="overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:mb-24 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div className="col-span-2">
            <h3 className="bg-gradient-to-r from-sky-800 to-sky-300 bg-clip-text text-center text-6xl font-extrabold leading-tight text-transparent dark:from-sky-500 sm:text-7xl md:leading-tight">
              50 Year Anniversary
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
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
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg font-semibold">
                23rd August 1971, marks the 50th anniversary of the death of
                Supt Gerry Richardson who was killed in the line of duty, whilst
                attending an armed robbery in Blackpool on 23rd August 1971.
                Gerry was aged just 38.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 dark:prose-invert lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Lancashire Police's chief constable joined trustees and other
                officers to lay flowers at Supt Richardson's grave in Layton
                Cemetery, Blackpool.
              </p>
              <p>
                Gerry assisted in a chase of a gang of five armed robbers who
                had attacked a jeweler's shop just yards from Blackpool's North
                Pier, which was bustling with visitors. He and PC Carl Walker,
                who also later won the George Cross, chased one of the raiders,
                Frederick Joseph Sewell (known as 'Fat' Fred'), down a dead-end
                alleyway.
              </p>
              <p>
                Sewell shot Walker in the thigh before Gerry tackled the gunman
                and attempted to persuade him to surrender his weapon. However,
                Gerry was shot twice in the stomach at point-blank range and
                died of his injuries later that day.
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
              <p>
                Our wonderful friend and fellow Trustee Andy Mitchell has
                put&nbsp;
                <Link href="https://mcusercontent.com/7771e7f24f51601d1cc47ccf9/files/434ec737-3ec5-295a-fec7-398b6b595316/Gerry_Richardson_package_230821.mp3?fbclid=IwAR3SyhlWyc6RC7NUQbLjeCoaZXSwSMRAW1djnmSKSRNA_ixBwqmy4dIie78">
                  <a target="_blank">this</a>
                </Link>
                &nbsp;extremely emotive podcast together for the BBC today
                please have a listen, take five minutes out, it’s worth it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
