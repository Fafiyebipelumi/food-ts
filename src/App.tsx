// import { useQuery } from 'react-query'
import './App.css'
import { useState, useEffect } from 'react'
import axios from './components/axios'
// import { IRecipesResponse } from './interfaces/recipes.interface'
import Recipe from './components/Recipe'
import { useFetchRecipes } from './hooks/recipes.hook';
// import { useFetchRecipes } from './hooks/recipes.hook'

function App() {
  // const [recipes, setRecipes] = useState([])
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  // const [error, setError] = useState<string | null>(null)

  // const getRecipeOptions = {
  //   method: 'GET',
  //   url: '/recipes/list',
  //   params: {
  //     from: '0',
  //     size: '20'
  //   }
  // }

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     setIsLoading(true)
  //     try {
  //       const response = await axios(getRecipeOptions)
  //       console.log(response.data.results);
  //       setRecipes(response.data.results)
  //       setIsLoading(false)
  //     } catch (error) {
  //       setError(`${error}`)
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchRecipes()
  // }, [])

  const { data, isSuccess, isError, error, status } = useFetchRecipes();
  if (status === 'loading') return <h2>Loading...</h2>
  if (isError) return `${error.message}`
  return (
    <>
      <h2>Hello React + Typescript + Vite + React-Query</h2>
      {isSuccess && data && data.results.map((recipe, idx) => (
        <div key={recipe.id}>
          <Recipe recipe={recipe} key={idx} />
          {/* <p>{idx}-{recipe.name}</p> */}
        </div>
      ))}
      {/* {recipes.map((recipe, idx) => (
      ))} */}
    </>
  )
}

export default App
