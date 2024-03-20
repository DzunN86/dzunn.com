import { Container } from "@/components/Container";
import { DribbbleIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon } from "@/components/SocialIcons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import portraitImage from "@/images/photos/image-3.jpg";

function SocialLink({ className, href, children, icon: Icon, ...props }: any) {
  return (
    <li className={clsx(className, "flex")}>
      <Link href={href} className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" {...props}>
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image src={portraitImage} alt="" sizes="(min-width: 1024px) 32rem, 20rem" className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">I&apos;m Dzun, a Frontend Engineer, and Amateur UI/UX Designer</h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {/* <p>Hey there 👋</p> */}
            <p>Hey there! My name is Dzun Nurroin, and Dzun in short.</p>
            <p>
              Technology has become a central part of my daily life, and I am passionate about the open-source community and the ways in which it promotes communication and collaboration. I am
              grateful to have found my love for coding at an early age and to have had the opportunity to mentor other students and make connections with people in the tech industry around the world.
            </p>
            <p>Overall, I am grateful for the path I have chosen in the tech industry and am excited to see where it takes me in the future.</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/DzunN86" aria-label="Follow on GitHub" icon={GitHubIcon} target="_blank">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/dzun-n/" aria-label="Follow on LinkedIn" icon={LinkedInIcon} target="_blank" className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://www.instagram.com/hifumi.design/" aria-label="Follow on Instagram" icon={InstagramIcon} target="_blank" className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://dribbble.com/dzunn86" aria-label="Follow on Dribbble" icon={DribbbleIcon} target="_blank" className="mt-4">
              Follow on Dribbble
            </SocialLink>
            <SocialLink href="mailto:nurroinz@gmail.com" icon={MailIcon} className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              nurroinz@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
