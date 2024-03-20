import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import React from "react";

function Article() {
  return (
    <Card as="article">
      <Card.Title href={`/articles`}>Article Title</Card.Title>
      <Card.Eyebrow as="time" dateTime="2021-01-01" decorate>
        {new Date("2021-01-01").toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
      </Card.Eyebrow>
      <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

export default function Short() {
  return (
    <SimpleLayout
      title="Shorts"
      intro="Short article that's not long enough to be a blog post, usually comes from my personal notes and ideas."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Article key={i} />
          ))}
        </ul>
      </div>
    </SimpleLayout>
  );
}
