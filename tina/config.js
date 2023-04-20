import { defineConfig } from 'tinacms'
import authors from './collections/authors'
import briefs from './collections/briefs'
import briefCountries from './collections/global/brief-countries'
import briefIssue from './collections/global/brief-issue'
import briefTech from './collections/global/brief-tech'
import language from './collections/global/language'
import dataResources from './collections/global/resources'
import about from './collections/pages/about'
import analysis from './collections/pages/analysis'
import brief from './collections/pages/brief'
import home from './collections/pages/home'
import resource from './collections/pages/resource'
import search from './collections/pages/search'
import workshop from './collections/pages/workshop'
import posts from './collections/posts'
import resources from './collections/resources'
import workshops from './collections/workshops'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master'

export default defineConfig({
  branch,
  clientId: '2f983ecc-2799-4dfe-9fab-6ca3aa05fc81', // Get this from tina.io
  token: '9c184a54c7124da0b1a39c745200a38b05f2958d', // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: './'
  },
  media: {
    tina: {
      mediaRoot: 'assets/images',
      publicFolder: ''
    }
  },
  schema: {
    collections: [
      home,
      about,
      analysis,
      search,
      brief,
      briefs,
      workshop,
      workshops,
      resource,
      resources,
      authors,
      posts,
      language,
      briefCountries,
      briefIssue,
      briefTech,
      dataResources
    ]
  }
})
