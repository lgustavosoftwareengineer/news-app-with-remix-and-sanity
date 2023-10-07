import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";

import { sanityClient } from "~/config";
import type { Notice } from "~/types";
import { PortableText } from "~/components";

export const loader = async ({ params: { slug } }: LoaderFunctionArgs) => {
  const notice = await sanityClient.fetch<Notice>(
    groq`*[_type=="notice" && slug.current == $slug][0]`,
    { slug }
  );

  return json({ notice });
};

export default function Slug() {
  const {
    notice: { content, title, subtitle },
  } = useLoaderData<typeof loader>();

  return (
    <main className="p-8 space-y-2">
      <h1 className="text-xl font-bold">{title}</h1>
      <h2>{subtitle}</h2>
      <div className="border-2 border-red-50 p-4">
        <PortableText value={content} />
      </div>
    </main>
  );
}
