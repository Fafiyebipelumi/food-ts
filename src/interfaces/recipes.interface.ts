export interface IRecipesResponse {
    id: number
    thumbnail_url: string
    name: string
    description: string
    original_video_url: string
    keywords: string
    price: {
        consumption_total: number
        consumption_portion: number
        total: number
        updated_at: string
        portion: number
    }
    nutrition: {
        fat: number
        calories: number
        sugar: number
        carbohydrates: number
        fiber: number
        updated_at: string
        protein: number
    }
}