import React from "react";
import PostList from "../posts/PostList";

const FeaturedPosts = ({ featuredPosts }: { featuredPosts: Post[] }) => {
  return (
    <section className="dark:bg-stone-700 py-14 md:py-20">
      <div className="max-w-6xl mx-auto max-lg:px-4">
        <h2 className="mb-4 text-center">Featured Posts</h2>
        <PostList posts={featuredPosts} />
      </div>
    </section>
  );
};

export default FeaturedPosts;
