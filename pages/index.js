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
  const renderEssays = () => (
    <SectionItemWrapper sectionHeader="essays">
      {posts.map((post) => (
        <SectionItem header={post.title} description={post.excerpt} url={`/post/${post.slug}`} />
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
        <SectionItem header={name} url={url} openLinkInNewTab />
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
            <br />i also write about crypto, startups, and life.
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
