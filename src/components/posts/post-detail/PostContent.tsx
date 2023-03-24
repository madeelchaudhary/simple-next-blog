import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./PostHeader";

const PostContent = ({ post }: { post: Post & { content: string } }) => {
  const { title, date, content, image } = post;
  return (
    <div className="pt-8 pb-12 lg:pt-12 lg:pb-20 bg-white dark:bg-gray-900 dark:text-gray-200">
      <div className="flex justify-between mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-[73ch] py-7 px-5 bg-gray-50 dark:bg-slate-700 dark:rounded shadow dark:shadow-lg">
          <PostHeader title={title} date={date} image={image} />
          <ReactMarkdown
            className="[&>p:first-of-type]:text-lg [&_p+p]:mt-3 [&_h2,h3]:mt-5 [&_h2,h3]:mb-3 [&_h2]:font-extrabold [&_h3]:font-bold [&_h2]:text-4xl [&_ul]:list-[initial] [&_ul]:ml-6 [&_ul]:mt-5"
            components={{
              code(code: any) {
                return (
                  <SyntaxHighlighter
                    language={code.className.replace("language-", "")}
                    style={nightOwl}
                  >
                    {code.children}
                  </SyntaxHighlighter>
                );
              },
              p(paragraph: any) {
                const firstChild = paragraph.children[0];

                if (firstChild.type === "img") {
                  return (
                    <Image
                      src={`/imgs/posts/${firstChild.props.src}`}
                      alt={firstChild.props.alt}
                      width={560}
                      height={320}
                    />
                  );
                }
                return <p>{paragraph.children}</p>;
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default PostContent;
