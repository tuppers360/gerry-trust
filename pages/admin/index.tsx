import { getSession, useSession } from 'next-auth/react';

import AdminLayout from 'components/layouts/AdminLayout';
import { GetServerSideProps } from 'next';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';

const Index: NextPageWithLayout = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;

  const user = session?.user;

  if (user && user.role !== 'USER') {
    return (
      <>
        <div>Your permissions do not allow you to view this page</div>
      </>
    );
  } else {
    return (
      <>
        <div>Welcome</div>
        <div>{user?.role}</div>
      </>
    );
  }
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session || session.user.role === 'USER') {
    return { redirect: { destination: '/admin/login', permanent: false } };
  }

  return {
    props: {
      session
    }
  };
};
