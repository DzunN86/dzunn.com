import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import readingTime from "reading-time";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
const root = process.cwd();

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allPosts: any, postSlug: string) => {
    const source = fs.readFileSync(path.join(root, "data", type, postSlug), "utf8");
    const { data } = matter(source);
    return [
      {
        ...data,
        // slug replaces .mdx or .md extension from postSlug
        slug: postSlug.replace(/\.mdx|\.md/, ""),
      },
      ...allPosts,
    ];
  }, []);
}

export async function getAllTags(type: string) {
  const posts = await getAllFilesFrontMatter(type);
  const tags: any = {};
  posts.forEach((post: any) => {
    if (post.tags && post.tags.length) {
      post.tags.forEach((tag: string) => {
        if (tags[tag]) {
          tags[tag] += 1;
        } else {
          tags[tag] = 1;
        }
      });
    }
  });
  return tags;
}

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, "data", type));
}

export async function getFilesBySlug(type: string, slug: string) {
  const source = slug ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8") : fs.readFileSync(path.join(root, "data", type, `${type}.mdx`), "utf8");

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            // behavior: "wrap",
            // properties: {
            //   className: ["menu-heading"],
            // },
          },
        ],
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}
