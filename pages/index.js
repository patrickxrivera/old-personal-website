import Head from "next/head";
import Link from "next/link";
import getPublishedPosts from "../graphcms/queries/getPublishedPosts";
import "tailwindcss/tailwind.css";

export async function getStaticProps() {
  const posts = await getPublishedPosts();

  return {
    props: {
      posts,
    },
  };
}

const QUESTIONS = [
  {
    category: "life",
    description:
      "what constitutes a 'successful' life? are aliens real? how can we use psychedelics to help us heal?",
  },
  {
    category: "work",
    description: "what would a community owned and operated digital publication look like?",
  },
];

const SOCIAL = [
  {
    name: "twitter",
    url: "https://twitter.com/patrickxrivera",
    description: "some shitposting, mostly simping for crypto",
  },
  {
    name: "instagram",
    url: "https://instagram.com/patrickxrivera",
    description: "to keep up w/ friends and be jealous of celebrities",
  },
  {
    name: "github",
    url: "https://github.com/patrickxrivera",
    description: "where some of my code lives",
  },
];

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-lightBlack text-brightGreen font-monospace p-8 text-standard">
        <div className="w-3/5">
          <p className="text-pinkish">
            hi, i'm Patrick Rivera.
            <br />
            <br />
            i'm a software engineer at{" "}
            <a target="_blank" className="underline" href="https://mirror.xyz">
              Mirror.xyz
            </a>{" "}
            - a decentralized protocol for publishing.
            <br />
            <br />
            previously, i was a software engineer on the growth team at{" "}
            <a target="_blank" className="underline" href="https://instacart.com">
              Instacart
            </a>{" "}
            and a lead software engineer at{" "}
            <a target="_blank" className="underline" href="https://dharma.io">
              Dharma
            </a>
            .
            <br />
            <br />i also like to write about crypto, social networks, and random life stuff.
          </p>
          <p className="text-pinkish mt-20 mb-2">essays</p>
          <ul>
            {posts.map((post) => (
              <div className="flex mt-6">
                <span>〉</span>
                <li className="ml-2">
                  <Link href={`/post/${post.slug}`}>
                    <a className="text-mustard hover:text-black hover:bg-mustard focus:text-black focus:bg-mustard">
                      {post.title}
                    </a>
                  </Link>
                  <p>{post.excerpt}</p>
                </li>
              </div>
            ))}
          </ul>
          <p className="text-pinkish mt-20 mb-2">questions i ask myself late at night</p>
          <ul>
            {QUESTIONS.map(({ category, description }) => (
              <div className="flex mt-6">
                <span>〉</span>
                <li className="ml-2">
                  <span
                    target="_blank"
                    className="text-mustard hover:text-black hover:bg-mustard focus:text-black focus:bg-mustard"
                  >
                    {category}
                  </span>
                  <p>{description}</p>
                </li>
              </div>
            ))}
          </ul>
          <p className="text-pinkish mt-20 mb-2">social presence</p>
          <ul>
            {SOCIAL.map(({ name, url, description }) => (
              <div className="flex mt-6">
                <span>〉</span>
                <li className="ml-2">
                  <a
                    href={url}
                    target="_blank"
                    className="text-mustard hover:text-black hover:bg-mustard focus:text-black focus:bg-mustard"
                  >
                    {name}
                  </a>
                  <p>{description}</p>
                </li>
              </div>
            ))}
          </ul>
          <div className="mt-16 mb-4">
            <p className="text-pinkish">
              website design inspired by{" "}
              <a className="underline" target="_blank" href="http://suchaone.github.io/">
                such a one
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
