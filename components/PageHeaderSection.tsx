import React, { FunctionComponent } from 'react';

type HeaderProps = {
  title?: string;
  heading?: string;
  center?: boolean;
};

const PageHeaderSection: FunctionComponent<HeaderProps> = ({
  title,
  heading,
  children,
}) => {
  return (
    <div className="py-12">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-4xl lg:px-8 text-center">
        <p className="text-gray-600 text-xl font-extrabold uppercase">
          {title}
        </p>
        <h1 className="mt-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-900 text-6xl lg:text-7xl font-extrabold leading-tight">
          {heading}
        </h1>
        <div className="mt-6 text-xl font-bold">{children}</div>
      </div>
    </div>
  );
};

export default PageHeaderSection;
