import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn
} from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import { GetServerSideProps } from 'next';
import { Provider } from 'next-auth/providers';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';
import { z } from 'zod';

const FormSchema = z.object({
  email: z
    .string({ required_error: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' })
});

type FormSchemaType = z.infer<typeof FormSchema>;

const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
  await signIn('email', {
    email: data.email,
    callbackUrl: '/admin',
    provider: 'email'
  });
};

const LoginPage: NextPageWithLayout = ({
  providers,
  csrfToken
}: {
  providers: Provider;
  csrfToken: any;
}) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema)
  });
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />
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
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {providers
                  ? Object.values(providers).map((provider, i) => {
                      if (provider.id !== 'email') {
                        return (
                          <div key={provider.name}>
                            <div>
                              <FontAwesomeIcon
                                icon={faGoogle}
                                onClick={() => signIn(provider.id)}
                              />
                            </div>
                          </div>
                        );
                      }
                    })
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken
    }
  };
};
