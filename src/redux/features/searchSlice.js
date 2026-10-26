import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: '',
    tab: 'photo',
    loading: false,
    result: [],
    error: null,

}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        },
        setTab: (state, action) => {
            state.tab = action.tab
        },
        setLoading: (state) => {
            state.loading = true
            state.error = null
        },
        setResult: (state, action) => {
            state.result = action.payload
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload

        },
        clearResult: (state) => {
            state.result = []
        }

    }
})

export const {setQuery,setTab,setLoading,setResult,setError,clearResult}=searchSlice.actions

export default searchSlice.reducer;