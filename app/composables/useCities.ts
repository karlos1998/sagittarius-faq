import {queryContent} from '@nuxt/content'
import type {CityData} from '~/types/city'

export const useCities = () => {
    const fetchAllCities = async (): Promise<CityData[]> => {
        try {
            const cities = await queryContent<CityData>('/cities')
                .only(['city', 'slug', 'department', 'payment', 'shipping', 'weapon_limits', 'additional_permits', 'document_submission', 'important_notes', 'office_hours'])
                .find()
            return cities
        } catch (error) {
            console.error('Error fetching cities:', error)
            return []
    }
  }

    const fetchCityBySlug = async (slug: string): Promise<CityData | null> => {
        try {
            const city = await queryContent<CityData>('/cities')
                .where('slug', '=', slug)
                .only(['city', 'slug', 'department', 'payment', 'shipping', 'weapon_limits', 'additional_permits', 'document_submission', 'important_notes', 'office_hours'])
                .findOne()
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
