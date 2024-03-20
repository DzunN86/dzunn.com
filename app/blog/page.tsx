import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import React from "react";

function Article() {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog`}>
          How to build a community from scratch
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime="2021-01-01"
          className="md:hidden"
          decorate
        >
          {new Date("2021-01-01").toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Card.Eyebrow>
        <Card.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Description>
        <Card.Cta>Read more</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime="2021-01-01"
        className="mt-1 hidden md:block"
      >
        {new Date("2021-01-01").toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Card.Eyebrow>
    </article>
  )
}

export default function Blog() {
  return (
    <SimpleLayout
      title="Writing on open source, community building, and the tech industry."
      intro="All of my long-form thoughts on community, leadership, volunteering, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {Array.from({ length: 3 }).map((_, i) => (
            <Article key={i} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
