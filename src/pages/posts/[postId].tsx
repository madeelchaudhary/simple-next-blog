import PostContent from "@/components/posts/post-detail/PostContent";
import { getAllFiles, getPostData } from "@/helpers/post-utils";
import { GetStaticPropsContext } from "next";
import path from "path";
import React from "react";

const SinglePost = ({ post }: { post: Post & { content: string } }) => {
  return (
    <>
      <PostContent post={post} />
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), "data", "posts");
  const allPostsFiles = await getAllFiles(postsDir);

  const slugs = allPostsFiles.map((file) => file.replace(/\.md/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { postId: slug } })),
    fallback: false,
  };
}
export async function getStaticProps({ params }: GetStaticPropsContext) {
  const postData = await getPostData((params!.postId as string) + ".md");

  if (!postData) {
    return { notFound: true };
  }

  return {
    props: { post: postData },
  };
}
