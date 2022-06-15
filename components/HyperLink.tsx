import React from 'react';

interface IHyperLinkProps {
  id: string;
  name: string;
}

function HyperLink({ id, name }: IHyperLinkProps): JSX.Element {
  return (
    <li>
      <a
        href={id}
        className="text-sky-700 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-500 no-underline hover:underline"
      >
        {name}
      </a>
    </li>
  );
}

export default HyperLink;
