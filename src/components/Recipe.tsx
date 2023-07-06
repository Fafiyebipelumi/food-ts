
import { IRecipesResponse } from '../interfaces/recipes.interface'

interface RecipeProps {
    recipe: IRecipesResponse
}

const Recipe = ({ recipe }: RecipeProps) => {
    return (
        <div>
            <p>{recipe.name}</p>
        </div>
    )
}

export default Recipe