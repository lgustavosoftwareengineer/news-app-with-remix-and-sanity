import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { getUrlForSanityImages } from "~/helpers";

type PortableImageProps = {
  value: SanityImageSource;
  isInline: boolean;
};
export function PortableImage({ isInline, value }: PortableImageProps) {
  return (
    <img
      alt={value.toString()}
      src={getUrlForSanityImages(value)
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
    />
  );
}
