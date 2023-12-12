import axios from 'axios';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/1fa106f0-a221-11ec-975b-f9cc2b0e6900';

export async function submitContactForm(
  name: string,
  email: string,
  message: string
): Promise<number> {
  const payload = {
    name,
    email,
    message,
  };

  return axios
    .post(FORM_ENDPOINT, payload)
    .then(response => response.status)
    .catch(response => response.status);
}
