import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import groq from "groq";
import { sanityClient } from "~/config/sanityClient";
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
    "location": location-> 
  }`);

  return json({ noticies });
};

export default function Index() {
  const { noticies } = useLoaderData<typeof loader>();

  return (
    <div className="p-4 space-y-4">
      {noticies.map(({ _id, slug, subtitle, title, location }) => {
        return (
          <div key={_id} className="space-y-2 border-red-500 border-2">
            <h1 className="font-bold text-xl">{title}</h1>
            <h2>{subtitle}</h2>
            <p className="text-sm"> {location?.state}</p>
            <Link to={`/${slug.current}`} className="text-blue-400 underline">
              Ver mais detalhes
            </Link>
          </div>
        );
      })}
    </div>
  );
}
