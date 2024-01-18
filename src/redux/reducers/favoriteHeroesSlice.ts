import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Hero } from '../../types/hero'

// Define a type for the slice state
type FavoriteHeroesState = {
  heroes: Hero[]
}

// Define the initial state using that type
const initialState: FavoriteHeroesState = {
  heroes: [],
}

export const favoriteHeroesSlice = createSlice({
  name: 'favoriteHeroes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Hero>) => {
      state.heroes.push(action.payload)
    }
  },
})

export const { addToFavorites } = favoriteHeroesSlice.actions

export default favoriteHeroesSlice.reducer
