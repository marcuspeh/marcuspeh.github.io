import axios from 'axios';
import packageJson from '../../package.json';

const url = `https://api.github.com/repos/${packageJson.owner}/${packageJson.repository}/branches/${packageJson.branch}`;

const UNKNOWN_STRING = 'unknown';

export async function fetchLastUpdate(): Promise<string> {
  return axios
    .get(url)
    .then(response => response?.data?.commit?.commit?.author?.date)
    .then(date => (date ? date : UNKNOWN_STRING))
    .catch(() => UNKNOWN_STRING);
}
