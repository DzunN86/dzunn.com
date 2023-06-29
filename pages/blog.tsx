import BlogItem from "@/components/BlogItem";
import CardCategories from "@/components/CardCategories";
import CardTags from "@/components/CardTags";
import { PageSEO } from "@/components/SEO";
import MainLayout from "@/layouts/MainLayout";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { Categories, Post, Tags } from "@/types";
import { Box, Flex, Grid, GridItem, Heading, Input, InputGroup, InputLeftElement, StackDivider, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { useMemo, useState } from "react";

type Props = {
  posts: Post[];
  tags: Tags;
  categories: Categories;
};

export default function Blog({ posts, tags, categories }: Props) {
  const [searchValue, setSearchValue] = useState("");

  const filtedPosts = useMemo(() => {
    return posts.filter((post: any) => post.publishedAt).filter((post: any) => post.title.toLowerCase().includes(searchValue.toLowerCase()));
  }, [posts, searchValue]);

  return (
    <MainLayout>
      <PageSEO title="Blog | Dzun Nurroin" description="Dzun Nurroin's personal website" />
      <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 5, md: "2rem", lg: "4rem", xl: "6rem" }} alignItems="flex-start">
        <GridItem colSpan={{ base: 12, lg: 8 }}>
          <Flex alignItems="center" justifyContent="space-between" mb="4rem" flexWrap="wrap" gap={4}>
            <Heading as="h1" size={{ base: "xl", md: "xl", lg: "2xl" }}>
              Writing
            </Heading>
            <InputGroup w={{ base: "100%", md: "auto" }} maxW={{ base: "100%", md: "15rem" }}>
              <InputLeftElement pointerEvents="none">
                <Box>🔍</Box>
              </InputLeftElement>
              <Input type="search" focusBorderColor="orange.400" placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} />
            </InputGroup>
          </Flex>
          <VStack spacing={4} alignItems="stretch" mb="1.5rem" divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.700")} />}>
            {!filtedPosts.length && <Text fontSize="md">No posts found 😢.</Text>}
            {filtedPosts.map((post: any) => (
              <BlogItem key={post.slug} post={post} />
            ))}
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 4 }}>
          <CardCategories categories={categories} />
          <CardTags tags={tags} />
        </GridItem>
      </Grid>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  const tags = posts.reduce((allTags: any, post: any) => {
    // format: { tag: { count: 1, slug: "tag" } }
    post.tags.forEach((tag: any) => {
      if (tag in allTags) {
        allTags[tag].count += 1;
      } else {
        // create slug from tag
        let slug = tag.toLowerCase().replace(/\s/g, "-");
        allTags[tag] = { count: 1, slug: slug };
      }
    });
    return allTags;
  }, {});
  const categories = posts.reduce((allCategories: any, post: any) => {
    // format: { category: { count: 1, slug: "category" } }
    if (post.category in allCategories) {
      allCategories[post.category].count += 1;
    } else {
      // create slug from category
      let slug = post.category.toLowerCase().replace(/\s/g, "-");
      allCategories[post.category] = { count: 1, slug: slug };
    }
    return allCategories;
  }, {});

  return { props: { posts, tags, categories } };
}
