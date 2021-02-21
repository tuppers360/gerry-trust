import React, { FunctionComponent } from 'react';

type HeaderProps = {
  title?: string;
  heading: string;
  type?: string;
  center?: boolean;
  author?: string;
};

const PageHeaderSection: FunctionComponent<HeaderProps> = ({
  title,
  heading,
  type,
  children
}) => {
  return (
    <div className="pt-12 pb-12">
      <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-3xl">
        {title && (
          <p className="text-xl font-semibold tracking-wider text-cyan-600 uppercase">
            {title}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-extrabold text-gray-700 tracking-tight sm:text-5xl">
          {heading}
        </h1>
        {children && (
          <div className="mt-8 mx-auto max-w-prose text-xl text-gray-500">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeaderSection;
