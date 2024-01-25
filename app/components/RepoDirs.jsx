import React from 'react';
import Link from 'next/link';

async function fetchContents(name) {
  const response = await fetch(
    `https://api.github.com/repos/nidhidsharma08121988/${name}/contents`
  );
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchContents(name);
  const dirs = contents.filter(content => content.type === 'dir');

  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map(dir => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
