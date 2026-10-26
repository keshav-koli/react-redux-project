import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: '',
    activeTab: 'photos',
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
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
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
            state.error = action.payload;
            state.loading = false;

        },
        clearResult: (state) => {
            state.result = []
        }

    }
})

export const { setQuery, setActiveTab, setLoading, setResult, setError, clearResult } = searchSlice.actions

export default searchSlice.reducer;