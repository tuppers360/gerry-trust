import React from 'react';

interface IFormSection {
  title: string;
  info?: string;
  children: any;
}
function FormSection({ title, info, children }: IFormSection) {
  return (
    <section className="py-8 md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="mt-1 text-lg font-medium leading-6 text-slate-700 dark:text-slate-300">
          {title}
        </h3>
        {info && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-100">
            {info}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

export default FormSection;
