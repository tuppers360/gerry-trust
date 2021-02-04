import React, { FunctionComponent } from 'react';

type HeaderProps = {
  title?: string;
  heading?: string;
  type?: string;
  center?: boolean;
};

const PageHeaderSection: FunctionComponent<HeaderProps> = ({
  title,
  heading,
  type,
  children
}) => {
  return (
    <div className="py-12">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-4xl lg:px-8 text-center">
        <p className="text-gray-600 text-xl font-extrabold uppercase">
          {title}
        </p>
        {/* //TODO - add the Julliette Font for the title */}
        <h1
          className={`bg-clip-text text-transparent bg-gradient-to-r to-blue-500 text-6xl font-extrabold py-4 ${
            type === 'story' ? 'from-blue-900' : 'from-blue-900'
          }`}
        >
          {heading}
        </h1>
        <div className="mt-6 text-xl font-bold">{children}</div>
      </div>
    </div>
  );
};

export default PageHeaderSection;
