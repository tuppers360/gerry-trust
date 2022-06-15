import Container from 'components/Container';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container title="404 – Gerry Richardson Trust">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mt-24">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-center md:text-5xl text-grey-800 dark:text-white">
          451 – Unavailable For Legal Reasons
        </h1>
        <p className="mb-8 text-slate-600 dark:text-slate-400">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Link href="/">
          <a className="w-64 p-1 mx-auto font-bold text-center bg-gray-100 border-gray-900 rounded-md shadow-lg sm:p-4 dark:bg-gray-900 text-grey-800 dark:text-grey-100">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
