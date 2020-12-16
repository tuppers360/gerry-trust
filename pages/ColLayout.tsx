import React from 'react';
import Layout from '../components/Layout';

export default function ColLayout() {
  return (
    <Layout title="testing">
      <div className="py-6 px-8">
        <div className="grid grid-cols-2 gap-2 max-w-2xl mx-auto">
          <div className="bg-blue-800 text-white py-2 rounded text-lg text-center flex justify-center items-center cursor-pointer">
            One-Off Payment
          </div>
          <div className="bg-blue-800 text-white py-2 rounded text-lg text-center flex justify-center items-center">
            Monthly Donation (coming soon)
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto mt-4">
          <div className="bg-blue-800 text-white py-2 rounded text-lg flex justify-center items-center cursor-pointer">
            10
          </div>
          <div className="bg-blue-800 text-white py-2 rounded text-lg flex justify-center items-center cursor-pointer">
            20
          </div>
          <div className="bg-blue-800 text-white py-2 rounded text-lg flex justify-center items-center cursor-pointer">
            50
          </div>
          <div className="bg-blue-800 text-white py-2 rounded text-lg flex justify-center items-center cursor-pointer">
            Other
          </div>
        </div>
      </div>
    </Layout>
  );
}
