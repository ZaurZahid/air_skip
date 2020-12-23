import { combineReducers, Reducer } from 'redux'

import tabReducer from '../slices/tab'
import { RootState } from '../types'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    tabState: tabReducer
})

export default rootReducer