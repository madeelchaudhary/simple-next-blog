import Image from "next/image";
import React from "react";

const PostHeader = ({
  title,
  image,
  date,
}: {
  title: string;
  image: string;
  date: string;
}) => {
  const imagePath = `/imgs/posts/${image}`;
  const formatedDate = new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="mb-4 lg:mb-6 not-format">
      <h1 className="mb-4 leading-tight text-gray-900 dark:text-white">
        {title}
      </h1>
      <footer className="mb-5">
        <time
          className="text-gray-700 dark:text-gray-200 text-md"
          dateTime={date}
        >
          {formatedDate}
        </time>
      </footer>
      <Image
        className="w-full max-w-prose mx-auto"
        src={imagePath}
        alt={title}
        width={520}
        height={340}
      />
    </header>
  );
};

export default PostHeader;
