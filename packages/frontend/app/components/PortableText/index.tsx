import type {
  PortableTextReactComponents,
  PortableTextProps as ReactPortableTextProps,
} from "@portabletext/react";
import { PortableText as ReactPortableText } from "@portabletext/react";
import { PortableImage } from "./components";

const defaultComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: PortableImage,
  },
};

export type PortableTextProps = ReactPortableTextProps & {};

export function PortableText({ components, ...props }: PortableTextProps) {
  return (
    <ReactPortableText
      {...props}
      components={{ ...defaultComponents, ...components }}
    />
  );
}
