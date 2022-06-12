import { Views } from 'lib/types';
import fetcher from 'lib/fetcher';
import { useEffect } from 'react';
import useSWR from 'swr';

export default function ViewCounter({ slug }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      });

    registerView();
  }, [slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
}
