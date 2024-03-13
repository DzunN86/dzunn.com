import { Container } from "@/components/Container";
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/components/SocialIcons";
import SocialLink from "@/components/SocialLink";
import Image from "next/image";
import image1 from "@/images/photos/image-1.jpg";
import image2 from "@/images/photos/image-2.jpg";
import image3 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpg";
import image5 from "@/images/photos/image-5.jpg";
import clsx from "clsx";
import BlurImage from "@/components/BlurImage";

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
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Frontend Engineer, Amateur Photographer</h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            a Software Engineer specialized in Frontend Development creating web based application from landing page and company profile, to internal dashboard and information system.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://twitter.com/vinzvinci" aria-label="Follow on Twitter" icon={TwitterIcon} />
            <SocialLink href="https://www.instagram.com/vinzvinci/" aria-label="Follow on Instagram" icon={InstagramIcon} />
            <SocialLink href="https://github.com/vinzvinci" aria-label="Follow on GitHub" icon={GitHubIcon} />
            <SocialLink href="https://www.linkedin.com/in/dzun-n/" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28"></Container>
    </>
  );
}
