import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

const postsDir = path.join(process.cwd(), "data", "posts");

async function getFileData(fileName: string) {
  const filePath = path.join(postsDir, fileName);
  const fileData = await fs.readFile(filePath, "utf-8");
  return fileData;
}

export async function getAllFiles(dir: string) {
  const allFiles = await fs.readdir(dir);
  return allFiles;
}

export async function getPostData(fileName: string) {
  const fileData = await getFileData(fileName);
  const { data, content } = matter(fileData);
  const postData = {
    ...(data as Post),
    slug: fileName.replace(/\.md$/, ""),
    content,
  };
  return postData;
}

async function getPostMetaData(fileName: string) {
  const fileData = await getFileData(fileName);
  const { data } = matter(fileData);
  const metaData = {
    ...(data as Post),
    slug: fileName.replace(/\.md$/, ""),
  };
  return metaData;
}

export async function getAllPosts() {
  const allFiles = await getAllFiles(postsDir);

  const allPosts = [];
  for (const file of allFiles) {
    const postData = await getPostMetaData(file);
    allPosts.push(postData);
  }
  //   const sortedPosts = allPosts.sort((a, b) => a);

  return allPosts;
}

export async function getFeaturedPosts() {
  const allPosts = await getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
