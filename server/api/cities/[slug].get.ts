import {readFile} from 'node:fs/promises'
import {join} from 'node:path'

export default defineEventHandler(async (event) => {
    const slug = getRouterParam(event, 'slug')

    if (!slug) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Slug is required'
        })
    }

    try {
        const filePath = join(process.cwd(), 'content/cities', `${slug}.json`)
        const content = await readFile(filePath, 'utf-8')
        const city = JSON.parse(content)

        return city
    } catch {
      throw createError({
          statusCode: 404,
          statusMessage: 'City not found'
      })
  }
})
