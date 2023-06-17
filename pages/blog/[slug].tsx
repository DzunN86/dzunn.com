import MDXComponents from "@/components/MDXComponents";
import hydrate from "next-mdx-remote/rsc";
import MainLayout from "@/layouts/MainLayout";
import { getFiles, getFilesBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import React from "react";
import { BlogSEO } from "@/components/SEO";
import BlogLayout from "@/layouts/BlogLayout";
import { createOgImage } from "@/lib/createOgImage";
import { dateFormatter } from "@/utils/formatter";

export default function DetailBlog({ mdxSource, frontMatter }: any) {
  console.log(frontMatter);
  const ogImage = createOgImage({
    title:
      "Lorem ipsum dolor sit ame, consectetur adipisicing elit. Cum mollitia veritatis ratione, voluptatibus soluta earum nulla nam ea beatae ut aspernatur magnam provident quidem placeat doloribus tempore. Quo, iste modi?",
    meta: "dzunn.com · " + dateFormatter(frontMatter.publishedAt),
  });
  console.log(ogImage);
  return (
    <BlogLayout title={frontMatter.title} publishedAt={frontMatter.publishedAt} readingTime={frontMatter.readingTime.text}>
      <BlogSEO
        title={frontMatter.title}
        date={frontMatter.publishedAt}
        summary={frontMatter.summary}
        url={`https://dzunn.com/blog/${frontMatter.slug}`}
        images={frontMatter.images}
        canonicalUrl={`https://dzunn.com/blog/${frontMatter.slug}`}
      />
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx|\.md/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = await getFilesBySlug("blog", params.slug);

  return { props: post };
}
