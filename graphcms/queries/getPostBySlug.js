import graphcms from "../";

const GET_POST_BY_SLUG = `
  query MyQuery($slug: String) {
    post(where: { slug: $slug }) {
      title
      slug
      content {
        html
        markdown
      }
      publishedAt
    }
  }
`;

export default async function getPostBySlug(slug) {
  const { post } = await graphcms.request(GET_POST_BY_SLUG, {
    slug,
  });

  return post;
}
