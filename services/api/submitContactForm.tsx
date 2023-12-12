const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/1fa106f0-a221-11ec-975b-f9cc2b0e6900';

export async function submitContactForm(
  name: string,
  email: string,
  message: string
): Promise<number> {
  return fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  }).then(response => {
    return response.status;
  });
}
