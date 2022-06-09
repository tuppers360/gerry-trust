import React from 'react';

type HeaderProps = {
  title?: string;
  heading: string;
  center?: boolean;
  author?: string;
  children?: any;
};

const PageHeaderSection = ({ title, heading, children }) => {
  return (
    <div className="pt-12 pb-12">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-3xl">
        {title && (
          <p className="text-xl font-semibold tracking-wider uppercase text-cyan-600">
            {title}
          </p>
        )}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-700 sm:text-5xl">
          {heading}
        </h1>
        {children && (
          <div className="mx-auto mt-8 text-xl text-gray-500 max-w-prose">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeaderSection;
