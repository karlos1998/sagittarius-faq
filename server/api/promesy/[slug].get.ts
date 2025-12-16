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
        const filePath = join(process.cwd(), 'content/promesy', `${slug}.json`)
        const content = await readFile(filePath, 'utf-8')
        const promesa = JSON.parse(content)

        return promesa
    } catch {
        throw createError({
            statusCode: 404,
            statusMessage: 'Promesa not found'
        })
    }
})
