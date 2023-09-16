import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit"
import { toggleSidebar } from "@/features/sidebarSlice"

const rootReducer = combineReducers({
	sidebar: toggleSidebar
})



export function setupStore(preloadedState?: PreloadedState<ReturnType<typeof rootReducer>>) {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	})
}



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
