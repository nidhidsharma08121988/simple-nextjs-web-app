import React, { Suspense } from 'react';
import Repo from '@/app/components/Repo';
import Link from 'next/link';
import RepoDirs from '@/app/components/RepoDirs';

const RepoPage = ({ params: { name } }) => {
  return (
    <div>
      <div className='container'>
        <Link href='/code/repos' className='btn btn-back'>
          Back to repositories
        </Link>
      </div>
      <div className='card'>
        <Suspense fallback={<div>Loading repo...</div>}>
          <Repo name={name} />
        </Suspense>
        <Suspense fallback={<div>Loading directories...</div>}>
          <RepoDirs name={name} />
        </Suspense>
      </div>
    </div>
  );
};

export default RepoPage;
