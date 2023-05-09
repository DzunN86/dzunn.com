import { PageSEO } from "@/components/SEO";
import MainLayout from "@/layouts/MainLayout";
import { Heading } from "@chakra-ui/react";

export default function about() {
  return (
    <MainLayout>
      <PageSEO
        title="About me | Dzun Nurroin"
        description="Dzun Nurroin's personal website"
      />
      <Heading as="h1" size="2xl">
        This page is under construction
      </Heading>
    </MainLayout>
  );
}
