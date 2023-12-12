import axios from 'axios';
import {submitContactForm} from './submitContactForm';

jest.mock('axios');

describe('Submit contact form function', () => {
  test('success', async () => {
    axios.post.mockReturnValueOnce(() => Promise.resolve({data: apiResponse}));

    const response = await submitContactForm('name', 'email', 'message');
    expect(axios.post).toHaveBeenCalled();
    expect(response.status).toEqual(200);
  });
  
  test('unexpected response', async () => {
    axios.post.mockReturnValueOnce(() => Promise.reject('Server error'));

    const response = await submitContactForm('name', 'email', 'message');
    expect(axios.post).toHaveBeenCalled();
    expect(response.status).toEqual(401);
  });
});
