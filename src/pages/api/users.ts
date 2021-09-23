import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Diego" },
    { id: 2, name: "Felipe" },
    { id: 3, name: "Marcio" },
  ];

  return response.json(users);
};
