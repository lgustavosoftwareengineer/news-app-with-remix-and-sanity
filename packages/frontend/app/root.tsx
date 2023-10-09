import { type LinksFunction } from "@remix-run/node";
import {SiMicrodotblog} from 'react-icons/si'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-screen w-screen">
        <header className="border-b-gray-100 bg-blue-400 border-b-2 p-8 font-bold text-gray-100 text-2xl flex space-x-2 items-center">
          <SiMicrodotblog/>
          <h1>Gustavo News</h1>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
