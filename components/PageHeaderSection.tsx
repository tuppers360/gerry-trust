import React from 'react';

type HeaderProps = {
  title?: string;
  heading: string;
  center?: boolean;
  author?: string;
  children?: any;
};

const PageHeaderSection = ({ title, heading, children }: HeaderProps) => {
  return (
    <div className="pt-12 pb-12">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-3xl lg:px-8">
        {title && (
          <p className="text-xl font-semibold uppercase tracking-wider text-sky-600">
            {title}
          </p>
        )}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-700 dark:text-slate-200 sm:text-5xl">
          {heading}
        </h1>
        {children && (
          <div className="mx-auto mt-8 max-w-prose text-xl dark:prose-invert">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeaderSection;
