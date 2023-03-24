import FeaturedPosts from "@/components/sections/FeaturedPosts";
import Hero from "@/components/sections/Hero";
import { getFeaturedPosts } from "@/helpers/post-utils";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Hero />
      <FeaturedPosts featuredPosts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = await getFeaturedPosts();

  return {
    props: { posts: featuredPosts },
  };
}
