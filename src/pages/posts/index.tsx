import AllPosts from "@/components/sections/AllPosts";
import { getAllPosts } from "@/helpers/post-utils";
import React from "react";

const PostsPage = ({ posts }: { posts: Post[] }) => {
  return <AllPosts posts={posts} />;
};

export default PostsPage;

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: { posts: allPosts },
  };
}
