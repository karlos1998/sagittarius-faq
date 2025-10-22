import type {CityData} from '~/types/city'

export const useCities = () => {
    const fetchAllCities = async (): Promise<CityData[]> => {
        try {
            const cities = await $fetch<CityData[]>('/api/cities')
            return cities || []
        } catch (error) {
            console.error('Error fetching cities:', error)
            return []
        }
    }

    const fetchCityBySlug = async (slug: string): Promise<CityData | null> => {
        try {
            const city = await $fetch<CityData>(`/api/cities/${slug}`)
            return city
        } catch (error) {
            console.error(`Error fetching city ${slug}:`, error)
            return null
        }
    }

    return {
        fetchAllCities,
        fetchCityBySlug
    }
}
