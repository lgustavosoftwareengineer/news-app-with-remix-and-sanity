import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import groq from "groq";
import { twMerge } from "tailwind-merge";

import { sanityClient } from "~/config/sanityClient";
import { getUrlForSanityImages } from "~/helpers";
import type { Notice } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const noticies = await sanityClient.fetch<Notice[]>(groq`*[_type=="notice"]{
    _id,
    title,
    subtitle,
    slug,
    writtenBy,
    previewImage,
    "location": location-> 
  }`);

  return json({ noticies });
};

export default function Index() {
  const { noticies } = useLoaderData<typeof loader>();

  return (
    <div>
      {noticies.map(
        ({ _id, slug, subtitle, title, location, previewImage }) => {
          return (
            <div
              key={_id}
              className="p-4 border-b-2 w-full border-b-blue-400 grid grid-cols-12 gap-8"
            >
              {previewImage && (
                <img
                  className="md:col-span-4 col-span-12"
                  alt={previewImage.alt}
                  src={getUrlForSanityImages(previewImage)
                    .image(previewImage)
                    .fit("max")
                    .auto("format")
                    .url()}
                />
              )}

              <div
                className={twMerge(
                  "col-span-12",
                  previewImage && "md:col-span-8"
                )}
              >
                <h1 className="font-bold md:text-xl text-lg">{title}</h1>
                <h2>{subtitle}</h2>
                <p className="text-sm"> {location?.state}</p>
                <Link
                  to={`/${slug.current}`}
                  className="text-blue-400 underline"
                >
                  Ver mais detalhes
                </Link>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
