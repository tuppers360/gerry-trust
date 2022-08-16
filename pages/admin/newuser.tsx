import { SubmitHandler, useForm } from 'react-hook-form';

import AdminLayout from 'components/layouts/AdminLayout';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { GetServerSideProps } from 'next';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
  email: z
    .string({ required_error: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' })
});

type FormSchemaType = z.infer<typeof FormSchema>;

const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
  console.log('DATA', data);
};

const NewUserPage: NextPageWithLayout = ({ session }: { session: Session }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema)
  });
  if (!session) return null;
  console.log('SESSION', session);
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>NewUser</div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email address
      </label>
      <div className="relative mt-1">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          disabled={isSubmitting}
          {...register('email', { required: true })}
          className={`block w-full rounded-md py-3 px-4 shadow-sm sm:text-sm ${
            errors.email
              ? `inset-1 border-red-300 pr-10 text-red-600 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:text-red-500`
              : 'border-gray-300 text-slate-700 focus:border-blue-900 focus:ring-blue-900'
          }`}
        />
        {errors.email && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-600 dark:text-red-500" />
          </div>
        )}
      </div>
      {errors.email && (
        <p
          className="mt-2 text-sm text-red-600 dark:text-red-500"
          id="email-error"
        >
          <span>{errors.email.message}</span>
        </p>
      )}
    </form>
  );
};

NewUserPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default NewUserPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(session);
  if (session) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
};
