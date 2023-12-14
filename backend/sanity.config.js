import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'igh4re44',
  dataset: 'production',

  plugins: [deskTool()],
  // plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
