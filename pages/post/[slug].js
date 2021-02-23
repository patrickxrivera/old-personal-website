import Head from "next/head";
import renderHTML from "react-render-html";
import Image from "next/image";
import Link from "next/link";
import getPostBySlug from "../../graphcms/queries/getPostBySlug";
import getPublishedPosts from "../../graphcms/queries/getPublishedPosts";
import NewsletterSignUp from "../../components/NewsletterSignUp";
import moment from "moment";

const formatDate = (date) => moment(date).format("MMMM Do YYYY");

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  // TODO: create featuredPosts query using the tags field
  const featuredPosts = await getPublishedPosts();

  return {
    props: {
      post,
      featuredPosts,
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

export default function Post({ post, featuredPosts }) {
  const formattedDate = formatDate(post.date);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/terminal-favicon.ico" />
      </Head>
      <div className="p-4 max-w-post lg:w-3/5 lg:pl-36 text-gray-800">
        <MysteriousPic />
        <div>
          <h1 className="mt-4 mb-4">{post.title}</h1>
          <p className="italic mb-4">{formattedDate}</p>
          {renderHTML(post.content.html)}
        </div>
        <div className="mt-16 mb-6">
          {featuredPosts && (
            <div>
              <p>Moar knowledge 🙇‍♂️</p>
              <div>
                {featuredPosts.map(({ title, slug, date }) => {
                  if (post.slug === slug) return null;

                  return (
                    <div className="mb-8">
                      <Link href={`/post/${slug}`}>
                        <a className="no-underline hover:cursor-pointer hover:text-indigo-600">
                          <p className="my-0 text-lg font-bold">{title}</p>
                        </a>
                      </Link>
                      <p className="my-0 italic text-gray-500">{formatDate(date)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="mt-12">
            <NewsletterSignUp />
          </div>
        </div>
      </div>
    </>
  );
}
