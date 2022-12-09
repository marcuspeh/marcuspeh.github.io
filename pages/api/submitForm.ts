// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
}

const FORM_ENDPOINT = "https://public.herotofu.com/v1/1fa106f0-a221-11ec-975b-f9cc2b0e6900" 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
  .then((response) => {
    res.status(response.status).json({})
  })  
}
