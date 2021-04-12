import Head from "next/head";
import getPublishedPosts from "../graphcms/queries/getPublishedPosts";
import { SectionItemWrapper, SectionItem } from "../components/Home/SectionComponents";
import { QUESTIONS, INTERESTS, SOCIAL } from "../utils/homePageData";

export async function getStaticProps() {
  const posts = await getPublishedPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  const mirrorPosts = [
    {
      title: "Tips for creators getting into crypto",
      excerpt: "A framework for progressively going down the crypto rabbit hole",
      href: "https://p.mirror.xyz/WQQywdjjfnksMRPMaNKBMxPBqfE5k8nL6pCLe1roGyw",
      openLinkInNewTab: true,
    },
    {
      title: "Crypto-native newsletter businesses",
      excerpt: "Some ways that crypto can help creators w/ financing, growth, and monetization",
      href: "https://p.mirror.xyz/CQnk9PLrBAUskCTCHiA5fA9SBDFZGEfCitVH343FWkY",
      openLinkInNewTab: true,
    },
    {
      title: "Internet renaissance vibez",
      excerpt: "Why i decided to join Mirror.xyz and why crypto is the shit",
      href: "https://p.mirror.xyz/pl07RMWdJZktHUAn8hZ02YlO35-Ju49orPrhaRnn4Vo",
      openLinkInNewTab: true,
    },
  ];

  const postsSliced = posts.slice(0, 2);

  const renderEssays = () => (
    <SectionItemWrapper sectionHeader="essays">
      {[...mirrorPosts, ...postsSliced].map((post) => (
        <SectionItem
          header={post.title}
          description={post.excerpt}
          slug={`/post/${post.slug}`}
          href={post.href}
          openLinkInNewTab={post.openLinkInNewTab}
        />
      ))}
    </SectionItemWrapper>
  );

  const renderInterests = () => (
    <SectionItemWrapper sectionHeader="stuff i like">
      {INTERESTS.map(({ category, description }) => (
        <SectionItem header={category} description={description} />
      ))}
    </SectionItemWrapper>
  );

  const renderQuestions = () => (
    <SectionItemWrapper sectionHeader="questions i ask myself late at night">
      {QUESTIONS.map(({ category, description }) => (
        <SectionItem header={category} description={description} />
      ))}
    </SectionItemWrapper>
  );

  const renderSocialLinks = () => (
    <SectionItemWrapper sectionHeader="social presence">
      {SOCIAL.map(({ name, url }) => (
        <div className="flex mt-6">
          <span>〉</span>
          <li className="mt-0 ml-2 flex flex-col">
            <a href={url} target="_blank" className="no-underline">
              <span className="text-mustard hover:text-black hover:bg-mustard focus:text-black focus:bg-mustard">
                {name}
              </span>
            </a>
          </li>
        </div>
      ))}
    </SectionItemWrapper>
  );

  return (
    <>
      <Head>
        <title>patrickxrivera</title>
        <link rel="icon" href="/terminal-favicon.ico" />
      </Head>

      <main className="bg-lightBlack text-brightGreen font-monospace p-8 text-standard">
        <div className="lg:w-3/5 max-w-post">
          <p className="text-pinkish">
            hi, i'm Patrick Rivera.
            <br />
            <br />
            i'm a software engineer at{" "}
            <a target="_blank" className="underline" href="https://mirror.xyz">
              Mirror.xyz
            </a>{" "}
            - a decentralized protocol that helps creators with financing, growth, and monetization.
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
            <br />i also write about crypto, startups, and the creator economy.
          </p>
          {renderEssays()}
          {renderInterests()}
          {renderQuestions()}
          {renderSocialLinks()}
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
