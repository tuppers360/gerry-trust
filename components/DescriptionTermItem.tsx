import React from 'react';

function DescriptionTermItem({ children }) {
  return (
    <dd className="text-md mt-1 text-slate-500 dark:text-slate-100">
      {children}
    </dd>
  );
}

export default DescriptionTermItem;
