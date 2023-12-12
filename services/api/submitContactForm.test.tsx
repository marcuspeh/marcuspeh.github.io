import axios from 'axios';
import {submitContactForm} from './submitContactForm';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Submit contact form function', () => {
  test('success', async () => {
    mockedAxios.post.mockResolvedValueOnce({status: 200, data: {}});
    const response = await submitContactForm('name', 'email', 'message');
    expect(axios.post).toHaveBeenCalled();
    expect(response).toEqual(200);
  });

  test('unexpected response', async () => {
    mockedAxios.post.mockRejectedValueOnce({status: 400, data: {}});

    const response = await submitContactForm('name', 'email', 'message');
    expect(axios.post).toHaveBeenCalled();
    expect(response).toEqual(400);
  });
});
