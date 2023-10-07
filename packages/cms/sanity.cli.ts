import {defineCliConfig} from 'sanity/cli'
import {Envs} from './config'

export default defineCliConfig({
  api: {
    projectId: Envs.SANITY_PROJECT_ID,
    dataset: Envs.SANITY_DATASET,
  },
})
