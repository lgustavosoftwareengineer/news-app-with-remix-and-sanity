function getEnvs() {
  return {
    SANITY_PROJECT_ID: process?.env?.SANITY_PROJECT_ID ?? "",
    SANITY_DATASET: process?.env?.SANITY_DATASET ?? "",
    SANITY_API_VERSION: process?.env?.SANITY_API_VERSION ?? "",
  };
}

export const Envs = getEnvs();
