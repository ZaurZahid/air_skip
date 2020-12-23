import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TabState } from "../types";

const initialState: TabState = {
    index: 0
}

const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers: {
        setTab: (state, { payload }: PayloadAction<number>) => ({
            index: payload
        })
    }
})

export const {
    setTab
} = tabSlice.actions

export default tabSlice.reducer