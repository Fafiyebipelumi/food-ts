
// import { IRecipesResponse } from '../interfaces/recipes.interface'

import { IRecipeProps } from "../interfaces/recipes.interface"

interface RecipeProps {
    recipe: IRecipeProps
}

const Recipe = ({ recipe }: RecipeProps) => {
    return (
        <div>
            <p>{recipe.name}</p>
        </div>
    )
}

export default Recipe