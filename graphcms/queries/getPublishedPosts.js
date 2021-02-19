import graphcms from "..";

export const GET_PUBLISHED_POSTS = `
  query MyQuery {
    posts(stage: PUBLISHED) {
      title
      slug
      excerpt
    }
  }
`;

export default async function getPublishedPosts() {
  const { posts } = await graphcms.request(GET_PUBLISHED_POSTS);

  return posts;
}
