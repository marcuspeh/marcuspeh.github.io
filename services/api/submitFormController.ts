
export async function submitContactForm(name: string, email: string, message: string): Promise<number> {
  return fetch("/api/submitForm", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message
    }),
  })
  .then((response) => {
    return response.status
  })  
}