export interface CardProps {}

export default function DonationCards() {
  return (
    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      <article className="group flex cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-900/5 transition duration-200 hover:scale-[1.02]">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline">
                Fundraising
              </a>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-slate-800">
                Local fundraising in the community
              </p>
              <p className="mt-3 text-base text-slate-500">
                Raised £189.89 over the last few months through donation box's
                in local public houses & the Blackpool Police Station
                Headquarters. Our trustee Claire also had a street party to
                raise funds.
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Gareth</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src="/images/gareth_tupman.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-left text-sm font-medium text-slate-800">
                Gareth
              </p>
              <div className="flex space-x-1 text-sm text-slate-500">
                <time dateTime="2020-03-16">Mar 16, 2020</time>
                {/* <span aria-hidden="true">&middot;</span>
                    <span>6 min read</span> */}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
