export interface CardProps {}

export default function DonationCards() {
  return (
    <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
      <article className="flex flex-col overflow-hidden transition duration-200 rounded-lg shadow-lg cursor-pointer group hover:scale-[1.02] ring-1 ring-gray-900/5">
        <div className="flex-shrink-0">
          <img
            className="object-cover w-full h-48"
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline">
                Fundraising
              </a>
            </p>
            <a href="#" className="block mt-2">
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
          <div className="flex items-center mt-6">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Gareth</span>
                <img
                  className="w-10 h-10 rounded-full"
                  src="/images/gareth_tupman.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-slate-800 text-left">
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

      {/* <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="object-cover w-full h-48"
                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="#" className="hover:underline">
                    Video
                  </a>
                </p>
                <a href="#" className="block mt-2">
                  <p className="text-xl font-semibold text-slate-800">
                    How to use search engine optimization to drive sales
                  </p>
                  <p className="mt-3 text-base text-slate-500">
                    Raised £1,580 over the last year after members of the group
                    voted on two charities to support. Fundraising challenges
                    included coffee mornings, a sponsored run and quiz nights.
                  </p>
                </a>
              </div>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">Brenna Goyette</span>
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-800">
                    <a href="#" className="hover:underline">
                      Brenna Goyette
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-slate-500">
                    <time dateTime="2020-03-10">Mar 10, 2020</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="object-cover w-full h-48"
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="#" className="hover:underline">
                    Case Study
                  </a>
                </p>
                <a href="#" className="block mt-2">
                  <p className="text-xl font-semibold text-slate-800">
                    Improve your customer experience
                  </p>
                  <p className="mt-3 text-base text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint harum rerum voluptatem quo recusandae magni placeat
                    saepe molestiae, sed excepturi cumque corporis perferendis
                    hic.
                  </p>
                </a>
              </div>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">Daniela Metz</span>
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-800">
                    <a href="#" className="hover:underline">
                      Daniela Metz
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-slate-500">
                    <time dateTime="2020-02-12">Feb 12, 2020</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>11 min read</span>
                  </div>
                </div>
              </div>
            </div> 
          </div>*/}
    </div>
  );
}
