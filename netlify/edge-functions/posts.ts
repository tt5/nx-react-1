import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const urlString = url.toString()
  const baseUrl = urlString.substring(0, urlString.lastIndexOf('/'));
  const data = await fetch(baseUrl + '/dataposts.json')
  const posts = await data.json()
  const id = url.searchParams.get("id");
  if (id) {
    return Response.json(posts.posts[id-1])
  }

  return Response.json(posts)
}

export const config = {
  path: '/posts',
};
