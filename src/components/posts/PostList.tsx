import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid gap-x-4 gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-cols-[400px]">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostList;
