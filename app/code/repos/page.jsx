import React from 'react';

async function fetchRepos() {
  const response = await fetch(
    'https://api.github.com/users/nidhidsharma08121988/repos'
  );
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  console.log(repos);
  return (
    <div>
      <h1>{repos[0].name}</h1>
    </div>
  );
};

export default ReposPage;
