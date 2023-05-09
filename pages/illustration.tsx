import { PageSEO } from "@/components/SEO";
import MainLayout from "@/layouts/MainLayout";
import { Heading } from "@chakra-ui/react";

export default function Illustration() {
  return (
    <MainLayout>
      <PageSEO
        title="Illustration | Dzun Nurroin"
        description="Dzun Nurroin's personal website"
      />
      <Heading as="h1" size="2xl">
        Illustration
      </Heading>
    </MainLayout>
  );
}
