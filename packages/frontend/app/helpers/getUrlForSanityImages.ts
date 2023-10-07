import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { sanityClient } from "~/config";

export const getUrlForSanityImages = (source: SanityImageSource) => {
  const {
    projectId = "",
    dataset = "",
    ...clientConfig
  } = sanityClient.config();

  return imageUrlBuilder({ projectId, dataset, ...clientConfig }).image(source);
};
