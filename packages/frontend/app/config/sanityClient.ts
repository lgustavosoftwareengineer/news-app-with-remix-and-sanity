import { createClient } from "@sanity/client";
import { Envs } from "./envs";

export const sanityClient = createClient({
  projectId: Envs.SANITY_PROJECT_ID,
  dataset: Envs.SANITY_DATASET,
  apiVersion: Envs.SANITY_API_VERSION,
});
