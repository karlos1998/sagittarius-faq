import {readdir, readFile} from 'node:fs/promises'
import {join} from 'node:path'

export default defineEventHandler(async () => {
    try {
        const contentDir = join(process.cwd(), 'content/cities')
        const files = await readdir(contentDir)

        const cities = await Promise.all(
            files
                .filter(file => file.endsWith('.json'))
                .map(async (file) => {
                    const content = await readFile(join(contentDir, file), 'utf-8')
                    return JSON.parse(content)
                })
        )

        return cities
  } catch (error) {
      console.error('Error reading cities:', error)
      throw createError({
          statusCode: 500,
          statusMessage: 'Failed to load cities'
      })
  }
})
