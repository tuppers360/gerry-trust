import Link from 'next/link';
import { NextPageWithLayout } from './_app';

const NotFoundPage: NextPageWithLayout = () => {
  return (
    <>
      <div className="mx-auto mt-24 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="text-grey-800 mb-4 text-center text-3xl font-bold tracking-tight dark:text-white md:text-5xl">
          451 – Unavailable For Legal Reasons
        </h1>
        <p className="mb-8 text-slate-600 dark:text-slate-400">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Link href="/">
          <a className="text-grey-800 dark:text-grey-100 mx-auto w-64 rounded-md border-gray-900 bg-gray-100 p-1 text-center font-bold shadow-lg dark:bg-gray-900 sm:p-4">
            Return Home
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;

export async function getStaticProps() {
  return {
    props: {
      title: 'ERROR: 404 – Gerry Richardson Trust'
    }
  };
}
