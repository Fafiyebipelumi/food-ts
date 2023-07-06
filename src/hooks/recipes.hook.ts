import { useQuery, UseQueryResult } from 'react-query';
import Client from '../http';
import { IRecipesResponse } from '../interfaces/recipes.interface';

const fetchRecipes = async () =>
    await Client({ method: 'GET', url: '/recipes/list', params: { from: '0', size: '10' } })

export const useFetchRecipes = () => {
    const query: UseQueryResult<IRecipesResponse, Error> = useQuery<IRecipesResponse, Error>('recipes', fetchRecipes)
    return query
}