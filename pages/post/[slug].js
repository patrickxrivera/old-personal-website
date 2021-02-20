import Head from "next/head";
import renderHTML from "react-render-html";
import Image from "next/image";
import Link from "next/link";
import getPostBySlug from "../../graphcms/queries/getPostBySlug";
import getPublishedPosts from "../../graphcms/queries/getPublishedPosts";
import moment from "moment";

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPublishedPosts();

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

function MysteriousPic() {
  return (
    <Link href="/">
      <Image
        className="cursor-pointer rounded-sm"
        src="/profile-pic.jpg"
        alt="profile-pic"
        width="80"
        height="80"
      />
    </Link>
  );
}

export default function Post({ post }) {
  const formattedDate = moment(post.date).format("MMMM Do YYYY");

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/terminal-favicon.ico" />
      </Head>
      <div className="p-4 lg:w-3/5 lg:pl-36">
        <MysteriousPic />
        <div className="text-gray-800">
          <h1 className="mt-4 mb-4">{post.title}</h1>
          <p className="italic mb-4">{formattedDate}</p>
          {renderHTML(post.content.html)}
        </div>
      </div>
    </>
  );
}
