export type Post = {
  slug: string;
  publishedAt: string;
  title: string;
  summary: string;
  tags: string[];
};

export type BlogItemProps = {
  post: Post;
};

export type Tag = {
  slug: string;
  count: number;
};

export type Tags = {
  [key: string]: Tag;
};

export type Category = {
  slug: string;
  count: string;
};

export type Categories = {
  [key: string]: Category;
};
