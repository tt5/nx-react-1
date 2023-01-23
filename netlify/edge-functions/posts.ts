import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  return Response.json({
    posts: [
      {
        id: 1,
        title: 'first',
      },
      {
        id: 2,
        title: 'second',
      },
      {
        id: 3,
        title: 'third',
      },
    ],
  });
}

export const config = {
  path: '/posts',
};
