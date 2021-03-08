import Link from "next/link";

export function SectionHeader({ text }) {
  return <p className="text-pinkish mt-20 mb-2">{text}</p>;
}

export function SectionDescription({ text }) {
  return <span className="mt">{text}</span>;
}

export function SectionItem({ header, description, slug, href, openLinkInNewTab }) {
  const target = openLinkInNewTab ? "_blank" : "";

  const LinkWrapper = ({ children }) =>
    href ? (
      <a href={href} target={target} className="no-underline">
        {children}
      </a>
    ) : (
      <Link href={slug}>
        <a target={target} className="no-underline">
          {children}
        </a>
      </Link>
    );

  const renderLinkedItem = () => (
    <>
      <LinkWrapper>
        <span className="text-mustard hover:text-black hover:bg-mustard focus:text-black focus:bg-mustard">
          {header}
        </span>
      </LinkWrapper>
      <SectionDescription text={description} />
    </>
  );

  const renderPlainItem = () => (
    <>
      <span target="_blank" className="text-mustard">
        {header}
      </span>
      <SectionDescription text={description} />
    </>
  );

  return (
    <div className="flex mt-6">
      <span>〉</span>
      <li className="mt-0 ml-2 flex flex-col">{slug ? renderLinkedItem() : renderPlainItem()}</li>
    </div>
  );
}

export function SectionItemWrapper({ sectionHeader, children }) {
  return (
    <>
      <SectionHeader text={sectionHeader} />
      <ul style={{ paddingInlineStart: 0 }}>{children}</ul>
    </>
  );
}
