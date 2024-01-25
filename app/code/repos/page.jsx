import React from 'react';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos() {
  const response = await fetch(
    'https://api.github.com/users/nidhidsharma08121988/repos'
  );
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className='repos-container'>
      <h2>Public Repositories</h2>
      <ul className='repo-list'>
        {repos.map(repo => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className='repo-details'>
                <span>
                  <FaStar>{repo.stargazers_count}</FaStar>
                </span>
                <span>
                  <FaCodeBranch>{repo.forks_count}</FaCodeBranch>
                </span>
                <span>
                  <FaEye>{repo.forks_count}</FaEye>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
