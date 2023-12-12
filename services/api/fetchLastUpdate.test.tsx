import axios from 'axios';
import {fetchLastUpdate} from './fetchLastUpdate';

jest.mock('axios');

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

    axios.get.mockImplementationOnce(() => Promise.resolve({data: apiResponse}));

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

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({data: apiResponse})
    );

    const response = await fetchLastUpdate();
    expect(axios.get).toHaveBeenCalled();
    expect(response).toEqual('unknown');
  });

  
  test('unexpected response', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject('Server error'));

    const response = await fetchLastUpdate();
    expect(axios.get).toHaveBeenCalled();
    expect(response).toEqual('unknown');
  });
});
