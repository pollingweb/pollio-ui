import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
	login: boolean;
	loading: boolean;
	redirectUrl: string;
	[key: string]: any;
};

const initialState: initialStateType = {
	login: false,
	loading: true,
	redirectUrl: '',
};

const userSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		updateAuth: (
			state,
			action: {
				payload: { key: string; value: string };
				type: string;
			}
		) => {
			state[action.payload.key] = action.payload.value;
		},

		setAuth: (state, action) => {
			return { ...state, ...action.payload };
		},

		clearAuth: (state, action) => {
			return { ...initialState, loading: false, redirectUrl: action.payload || '' };
		},
	},
});

export const { clearAuth, setAuth, updateAuth } = userSlice.actions;
export default userSlice.reducer;
