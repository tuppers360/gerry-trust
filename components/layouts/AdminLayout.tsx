import AdminNavBar from 'components/AdminNavBar';

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavBar />
      <main id="skip" className="mb-48">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  );
}
