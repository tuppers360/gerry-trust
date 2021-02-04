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
    <div className="py-12">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-4xl lg:px-8 text-center">
        {title && (
          <p className="text-gray-600 text-xl font-extrabold uppercase">
            {title}
          </p>
        )}
        <h1
          className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-500 font-bold py-4 ${
            type === 'story' ? ' font-julietta text-7xl' : ' text-6xl'
          }`}
        >
          {heading}
        </h1>
        {children && <div className="mt-6 text-xl font-bold">{children}</div>}
      </div>
    </div>
  );
};

export default PageHeaderSection;
