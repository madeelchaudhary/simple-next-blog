import React from "react";
import PostList from "../posts/PostList";

const AllPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="dark:bg-stone-700 py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center">All Posts</h1>
        <div className="mt-10">
          <PostList posts={posts} />
        </div>
      </div>
    </section>
  );
};

export default AllPosts;
