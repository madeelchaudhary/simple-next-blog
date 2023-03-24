import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowLeft from "../icons/arrow-left";

const PostItem = ({ post }: { post: Post }) => {
  const { title, excerpt, slug, image } = post;
  const imagePath = `/imgs/posts/${image}`;
  const postPath = `/posts/${slug}`;

  return (
    <article className="bg-white border border-gray-200 shadow dark:shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="w-full md:h-52"
        src={imagePath}
        alt={title}
        width={460}
        height={320}
      />

      <div className="p-5">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Link href={postPath}>{title}</Link>
        </h3>
        <p className="mb-3 text-gray-700 dark:text-gray-400">{excerpt}</p>
        <Link
          href={postPath}
          className="group inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <span className="ml-2 transition-transform ease-in-out group-focus:translate-x-1 group-hover:translate-x-1">
            <ArrowLeft />
          </span>
        </Link>
      </div>
    </article>
  );
};

export default PostItem;
