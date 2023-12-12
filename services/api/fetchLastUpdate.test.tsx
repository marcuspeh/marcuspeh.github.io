import axios from 'axios';
import {fetchLastUpdate} from './fetchLastUpdate';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Fetch Lat Update function', () => {
  test('success', async () => {
    const lastUpdated = '2023-07-29T01:35:31Z';
    const apiResponse = {
      name: 'main',
      commit: {
        commit: {
          author: {
            name: 'marcuspeh',
            date: lastUpdated,
          },
        },
      },
    };

    mockedAxios.get.mockResolvedValueOnce({
      status: 200,
      data: apiResponse,
    });

    const response = await fetchLastUpdate();
    expect(axios.get).toHaveBeenCalled();
    expect(response).toEqual(lastUpdated);
  });

  test('unexpected response', async () => {
    const lastUpdated = '2023-07-29T01:35:31Z';
    const apiResponse = {
      name: 'main',
      date: lastUpdated,
    };

    mockedAxios.get.mockResolvedValueOnce({
      status: 200,
      data: apiResponse,
    });

    const response = await fetchLastUpdate();
    expect(axios.get).toHaveBeenCalled();
    expect(response).toEqual('unknown');
  });

  test('unexpected response', async () => {
    mockedAxios.get.mockRejectedValueOnce({
      status: 400,
      data: {},
    });

    const response = await fetchLastUpdate();
    expect(axios.get).toHaveBeenCalled();
    expect(response).toEqual('unknown');
  });
});
