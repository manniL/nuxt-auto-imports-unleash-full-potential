export default defineNuxtConfig({
  // 1. Add another component auto import folder
  // Safest and easiest way ;)
  hooks: {
    "components:dirs": (dirs) => {
      dirs.push({
        path: '~/app-components',
        prefix: 'App'
      })
    }
  },
  // 2. Auto-import JS/TS files
  imports: {
    // Yey to Unimport!
    dirs: [
      './constants'
    ],
    // 3. Auto-import package exports
    presets: [
      {
        from: 'date-fns/addDays',
        imports: [
          { name: 'default', as: 'addDays' }
        ]
      }
    ]
  },
  // 4. Integrate with Nitro
  nitro: {
    imports: {
      dirs: [
        './constants'
      ],
      presets: [
        {
          from: 'date-fns/addDays',
          imports: [
            { name: 'default', as: 'addDays' }
          ]
        }
      ]
    }
  }
})