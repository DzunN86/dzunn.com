import MainLayout from "@/layouts/MainLayout";
import { useRouter } from "next/router";

export default function BlogDetail() {
  const { slug } = useRouter().query;

  return (
    <MainLayout>
      <h1>{slug}</h1>
    </MainLayout>
  );
}
