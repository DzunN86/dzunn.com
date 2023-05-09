import { PageSEO } from "@/components/SEO";
import MainLayout from "@/layouts/MainLayout";
import { Heading } from "@chakra-ui/react";

export default function Resume() {
  return (
    <MainLayout>
      <PageSEO
        title="Resume | Dzun Nurroin"
        description="Dzun Nurroin's personal website"
      />
      <Heading as="h1" size="2xl">
        This page is under construction
      </Heading>
    </MainLayout>
  );
}
