import Head from "next/head";
import renderHTML from "react-render-html";
import Link from "next/link";
import graphcms from "../../graphcms";
import getPostBySlug from "../../graphcms/queries/getPostBySlug";

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(
    `
        query MyQuery {
          posts(stage: PUBLISHED) {
            slug
          }
        }
      `
  );

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default function Post({ post }) {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>{post.title}</h1>
      {renderHTML(post.content.html)}
    </div>
  );
}
