import { getBlurDataURL } from "@/libs/blurDataURL";
import Image from "next/image";

export default function NextImage({ alt, src, width, height, style }: any) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
      placeholder="blur"
      blurDataURL={getBlurDataURL(700, 475)}
    />
  );
}
