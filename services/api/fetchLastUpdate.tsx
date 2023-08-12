import axios from 'axios';
import packageJson from '../../package.json';

const url = `https://api.github.com/repos/${packageJson.owner}/${packageJson.repository}/branches/${packageJson.branch}`;

export async function fetchLastUpdate(): Promise<string> {
  return axios
    .get(url)
    .then(response => response.data.commit.commit.author.date);
}
