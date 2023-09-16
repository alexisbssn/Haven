import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		isExpanded: boolean
	}
}

const initialState: InitialState = {
	value: {
		isExpanded: false,
	},
}

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.value.isExpanded = !state.value.isExpanded
		},
	},
})

export default sidebarSlice.reducer
export const { toggleSidebar } = sidebarSlice.actions
