import { createSlice, configureStore } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './state'

const basketSlice = createSlice({
    name: 'basket',
    initialState: INITIAL_STATE,
    reducers: {
        add: (state, action) => {
        // add item to basket using `state` and `action` props
        }
    }
})
  
const store = configureStore({ reducer: basketSlice.reducer })

export const { add } = basketSlice.actions

export { basketSlice, store }