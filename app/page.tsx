import BlurImage from "@/components/BlurImage";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { DribbbleIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";
import SocialLink from "@/components/SocialLink";
import image1 from "@/images/photos/image-1.jpg";
import image2 from "@/images/photos/image-2.jpg";
import image3 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpg";
import image5 from "@/images/photos/image-5.jpg";
import logoDevProtocol from '@/images/logos/devprotocol.png'
import clsx from "clsx";
import Image from "next/image";
import { Button } from "@/components/Button";

function Photos() {
  let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx("relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl", rotations[imageIndex % rotations.length])}
          >
            <BlurImage
              src={image}
              alt={`Gallery - ${imageIndex + 1}`}
              sizes="(min-width: 640px) 50vw, 100vw"
              // "(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

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

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Dev Protoocol',
      title: 'Program Manager',
      logo: logoDevProtocol,
      start: 'Jan 2022',
      end: 'Nov 2022',
      // start: '2019',
      // end: {
      //   label: 'Present',
      //   dateTime: new Date().getFullYear(),
      // },
    },
    {
      company: 'Dev Protocol',
      title: 'Developer Relations',
      logo: logoDevProtocol,
      start: 'Oct 2021',
      end: '2019',
    },
    {
      company: 'Dev Protocol',
      title: 'DevRel Intern',
      logo: logoDevProtocol,
      start: 'Jul 2021',
      end: 'Oct 2021',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="./Villafuerte-Vincent_Resume.pdf" variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9 fade-in-start">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl" data-fade="0">
            Frontend Engineer, and Amateur UI/UX Designer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400" data-fade="2">
            a Software Engineer specialized in Frontend Development creating web based application from landing page and company profile, to internal dashboard and information system.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://github.com/DzunN86" aria-label="Follow on GitHub" icon={GitHubIcon} />
            <SocialLink href="https://www.linkedin.com/in/dzun-n/" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
            <SocialLink href="https://www.instagram.com/hifumi.design/" aria-label="Follow on Instagram" icon={InstagramIcon} />
            <SocialLink href="https://dribbble.com/dzunn86" aria-label="Follow on Dribbble" icon={DribbbleIcon} />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
